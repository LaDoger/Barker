// Testing the idea of barking to multiple addresses.
// Can't compile yet... array thing problem

pragma solidity =0.8.0;

interface IBarker {
    function collectTips() external;
    function transferOwnership(address payable newOwner) external;
    event Bark(address author, address barkingToWhom, string content, uint256 tip);
    event TipReceived(address thisBark, address tipper, uint256 amount);
    event TipsCollected(address owner, address collector, uint256 amount);
    event OwnerChanged(address previousOwner, address newOwner);
}

contract Barker is IBarker {
    address payable public author;
    address payable public owner;
    
    // "barkingToWhom" is now an array of addresses.
    address[] payable public barkingToWhom;
    
    string public content;
    
    // constructor now takes an array of addresses instead.
    constructor(address[] payable barkingToWhom_, string memory content_) payable {
        author = payable(msg.sender);
        owner = author;
        barkingToWhom = barkingToWhom_;
        content = content_;
        
        // Transfer to each address and log and event for each tx.
        // msg.value must be dividable by the address amount.
        for (uint256 i=0; i < barkingToWhom_.length; i++) {
            barkingToWhom[i].transfer(msg.value / barkingToWhom_.length);
            emit Bark(author, barkingToWhom[i], content, msg.value / barkingToWhom_.length);
        }
    }

    receive() external payable {
        emit TipReceived(address(this), msg.sender, msg.value);
    }

    function collectTips() public override {
        uint256 amount = address(this).balance;
        owner.transfer(amount);
        emit TipsCollected(owner, msg.sender, amount);
    }
    
    function transferOwnership(address payable newOwner) public override {
        require(msg.sender == owner, "Only the owner can call this function.");
        emit OwnerChanged(owner, newOwner);
        owner = newOwner;
    }
}

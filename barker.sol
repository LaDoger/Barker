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
    address payable public barkingToWhom;
    string public content;
    
    constructor(address payable barkingToWhom_, string memory content_) payable {
        author = payable(msg.sender);
        owner = author;
        barkingToWhom = barkingToWhom_;
        content = content_;
        barkingToWhom.transfer(msg.value);
        emit Bark(author, barkingToWhom, content, msg.value);
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

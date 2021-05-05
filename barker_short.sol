// Tried a shorter version to save gas(?)
pragma solidity =0.8.0;

interface IBarker {
    function claimTips() external;
    event Bark(address author, address rebarkTo, string content, uint256 tips);
    event Claimed(address author, address claimer, uint256 amount);
    event TipReceived(address thisBark, address tipper, uint256 amount);
}

contract Barker is IBarker {
    address payable public author;
    address payable public rebarkTo;
    string public content;
    
    constructor(address payable rebarkTo_, string memory content_) payable {
        author = payable(msg.sender);
        rebarkTo = rebarkTo_;
        content = content_;
        rebarkTo.transfer(msg.value);
        emit Bark(author, rebarkTo, content, msg.value);
    }
    
    function claimTips() public override {
        uint256 amount = address(this).balance;
        author.transfer(amount);
        emit Claimed(author, msg.sender, amount);
    }
    
    receive() external payable {
        emit TipReceived(address(this), msg.sender, msg.value);
    }
}

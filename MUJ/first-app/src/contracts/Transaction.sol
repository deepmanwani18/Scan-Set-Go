pragma solidity ^0.5.0;

contract Transaction {
    
    string public shopName;

    struct Purchase {
        string shopName;
        uint cost;
        address payable author;
    }

    event Transact (
        uint cost,
        string shopName,
        address payable author
    )

    function pay (address author, string shopName) public payable {
        address(author).transfer(msg.value);

        emit Transact(author, shopName);
    }
}
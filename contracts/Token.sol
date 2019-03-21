
pragma solidity >=0.4.7 <0.6.0;

contract Token{

    struct signaturies{
        address signee;
        bool signed;
    }


    string public name = "UMaTCoin";
    string public symbol = "UMC";
    uint8 public decimals = 8;
    uint256 public totalSupply;


    //events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    mapping(address => uint256) public balanceOf;
    mapping(uint => signaturies) public sign;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
    

    // modifier for only signaturies
    modifier signersOnly{
        require(sign[0].signee == msg.sender || sign[1].signee == msg.sender || sign[2].signee == msg.sender );
        _;
    }

    // transfer from current address to another address {Not really required since transaction is from contract address to 'to' address}
    function transfer(address _to, uint256 _value) public returns (bool success){
        //check for enough funds b4 transfer
        require(balanceOf[msg.sender]>=_value);
        //Subtract from current balance
        balanceOf[msg.sender]-=_value;
        //Transfer amount
        balanceOf[_to] += _value;

        emit Transfer(msg.sender,_to,_value);
        return true;
    }

    // transfer from contract address to specified address
    function transferFrom(address _from,  address _to, uint256 _value) public signersOnly returns (bool success){
        require(balanceOf[_from] >= _value);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        return true; 
    }

    function approve (address _contractAddress, address _receipient, uint256 _value) public returns (bool success){
        if(sign[0].signed && sign[1].signed && sign[2].signed){
            transferFrom(_contractAddress, _receipient, 19);
        }else{
            return false;
        }
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining){

    }

    function assignSignaturies(address treasurer, address financeOfficer, address president) public returns (bool success) {
        sign[0].signee = treasurer;
        sign[1].signee = financeOfficer;
        sign[2].signee = president;
        return true;
    }

    function addSignatory(address[] memory signers) public returns (bool success) {
        uint index = 0;
        uint len = signers.length;
        uint initialLen = 3;
        for(uint i; i == len; i++){
            len = len - initialLen;
            ++initialLen;
            sign[initialLen].signee = signers[index];
            ++index;
        }
        return true;
    }

}
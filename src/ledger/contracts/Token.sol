
pragma solidity >=0.4.7 <0.6.0;

contract Token{

    struct signaturies{
        bool signer;
        // uint index;
        transactions [] transaction;
    }

    struct transactions{
        uint256 id;
        uint no_signed;
        address [] signed;
        address executioner;
    }

    string public name = "UMaTCoin";
    string public symbol = "UMC";
    uint8 public decimals = 8;
    uint256 public totalSupply;
    uint public no_signaturies;
    uint public no_signed=0;
    address public owner;
    uint public execs_signed = 0;
    uint256 public contractBalance;
    uint256 public index=0;
    transactions trans;

    //events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event SignaturiesCreated(address treasurer,address financeOfficer, address president);
    event AddSignaturies(address[] signaturies);
    event ApproveTransaction(address _contractAddress, address _receipient, uint256 _value);
    event TransferFrom(address _to, uint256 _value);
    event Data(bool a);
    
    mapping(address => uint256) public balanceOf;
    mapping(address => signaturies) public sign;

    constructor(uint256 _initialSupply) public {
        owner = msg.sender;
        // balanceOf[owner] = _initialSupply;
        totalSupply = _initialSupply;
        contractBalance = _initialSupply;
    }
    

    // modifier for only signaturies
    modifier signersOnly{
        require(sign[msg.sender].signer==true);
        _;    
    }

    modifier signedOnly(uint transId){
        require(sign[msg.sender].transaction[transId].no_signed == no_signaturies);
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
    function transferFromContract(address _to, uint256 _value) public returns (bool success){

        require(contractBalance >= _value);
        contractBalance -= _value;
        balanceOf[_to] += _value;
        emit TransferFrom(_to,_value);
        return true; 
    }
    
    function createTransaction() public signersOnly returns(bool success){
        // trans = transactions(index+1,1,[msg.sender],msg.sender);
        trans.id = index+1;
        trans.no_signed=1;
        trans.signed.push(msg.sender);
        trans.executioner = msg.sender;
        sign[msg.sender].transaction.push(trans);
        return true;
    }

    function signTransaction(address executioner, uint id,address a) public signersOnly returns (bool success){
        sign[executioner].transaction[id].signed.push(a);
        ++sign[executioner].transaction[id].no_signed;
        return true;
    }

    function approve (address _contractAddress, address _receipient, uint256 _value, uint transId, address executioner) public signersOnly returns (bool success){
        require(sign[executioner].transaction[transId].no_signed == no_signaturies);
        transferFromContract(_receipient, _value);
        emit ApproveTransaction(_contractAddress, _receipient, _value);
        return false;
    }

    // function allowance(address _owner, address _spender) public view returns (uint256 remaining){

    // }

    function assignSignaturies(address treasurer, address financeOfficer, address president) public returns (bool success) {
        sign[treasurer].signer=true;
        sign[financeOfficer].signer=true;
        sign[president].signer=true;
        no_signaturies = 3;
        emit SignaturiesCreated(treasurer,financeOfficer, president);
        return true;
    }

    function addSignatory(address[] memory signers) public returns (bool success) {

        uint len = signers.length;

        for(uint i = 0; i < len; i++){
            sign[signers[i]];
        }
        no_signaturies += len; 
        emit AddSignaturies(signers);
        return true;
    }

}

pragma solidity >=0.4.7 <0.6.0;

contract Token{

    // struct signaturies{
    //     uint id;
    //     address signee;
    //     bool signed;
    // }


    string public name = "UMaTCoin";
    string public symbol = "UMC";
    uint8 public decimals = 8;
    uint256 public totalSupply;
    uint public no_signaturies;
    uint public no_signed=0;
    address public owner;
    uint public execs_signed = 0;
    uint256 public contractBalance;

    //events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event SignaturiesCreated(address treasurer,address financeOfficer, address president);
    event AddSignaturies(address[] signaturies);
    event ApproveTransaction(address _contractAddress, address _receipient, uint256 _value);
    event TransferFrom(address _to, uint256 _value);
    event Data(bool a);
    
    mapping(address => uint256) public balanceOf;
    mapping(address => bool) public sign;

    constructor(uint256 _initialSupply) public {
        owner = msg.sender;
        // balanceOf[owner] = _initialSupply;
        totalSupply = _initialSupply;
        contractBalance = _initialSupply;
    }
    

    // modifier for only signaturies
    modifier signersOnly{
        require(sign[msg.sender]==false || sign[msg.sender]==true);
        _;    
    }

    modifier signedOnly{
        require(no_signaturies == no_signed);
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
    function transferFromContract(address _to, uint256 _value) private returns (bool success){

        require(contractBalance >= _value);
        contractBalance -= _value;
        balanceOf[_to] += _value;
        emit TransferFrom(_to,_value);
        return true; 
    }

    function signTransaction(address a) public signersOnly returns (bool success){
        // sign[msg.sender] = true;
        if(sign[a]==false){
            sign[a] = true;
            ++no_signed;
        }
        return true;
    }

    function approve (address _contractAddress, address _receipient, uint256 _value) public signedOnly returns (bool success){
        transferFromContract(_receipient, _value);
        emit ApproveTransaction(_contractAddress, _receipient, _value);
        return false;
    }

    // function allowance(address _owner, address _spender) public view returns (uint256 remaining){

    // }

    function assignSignaturies(address treasurer, address financeOfficer, address president) public returns (bool success) {
        sign[treasurer] = false;
        sign[financeOfficer] = false;
        sign[president] = false;
        no_signaturies = 3;
        emit SignaturiesCreated(treasurer,financeOfficer, president);
        return true;
    }

    function addSignatory(address[] memory signers) public returns (bool success) {

        uint len = signers.length;

        for(uint i = 0; i < len; i++){
            sign[signers[i]] = false;
        }
        no_signaturies += len; 
        emit AddSignaturies(signers);
        return true;
    }

}
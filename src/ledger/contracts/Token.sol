
pragma solidity >=0.4.7 <0.6.0;
// pragma experimental ABIEncoderV2;

contract Token{

    struct signaturies{
        bool signer;
        uint index;
        transactions [] transaction;
        string [] receipts;
    }

    struct transactions{
        uint256 id;
        uint no_signed;
        address [] signed;
        address executioner;
        string purpose;
        uint256 amount;
        address to;
        string txHash;
        uint index;
    }


    string public name = "UMaTCoin";
    string public symbol = "UMC";
    uint8 public decimals = 8;
    uint public totalSupply;
    uint public no_signaturies;
    uint public no_signed=0;
    address public owner;
    uint public execs_signed = 0;
    uint256 public contractBalance;
    uint index = 0;
    address [] public signaturesAuthorized;
    transactions [] public signedTransactions;
    transactions [] public pendingTransactions;
    transactions [] public allTransactions;

    transactions trans;

    //events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event SignaturiesCreated(address treasurer,address financeOfficer, address president);
    event AddSignaturies(address[] signaturies);
    event ApproveTransaction(address _contractAddress, uint id, uint no_signed, address executioner, address [] sig);
    event TransferFrom(address _to, uint256 _value);
    event Data(bool a);
    event TransactionDet(uint id, uint no_signed, address signed, address executioner);
    // event ReceiptDetails(bytes [] receipts);
    // event SignedTransactions(transactions [] signedTrans);
    event PendingTransaction(
        uint256 id,
        uint no_signed,
        address [] signed,
        address executioner,
        string purpose,
        uint256 amount,
        address to,
        bytes txHash
    );
    
    mapping(address => uint256) public balanceOf;
    mapping(address => signaturies) public sign;

    constructor(uint256 _initialSupply, address treasurer, address financeOfficer, address president) public {
        owner = msg.sender;
        // balanceOf[owner] = _initialSupply;
        totalSupply = _initialSupply;
        contractBalance = _initialSupply;
        assignSignaturies(treasurer,financeOfficer,president);
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
        // emit TransferFrom(_to,_value);
        return true; 
    }
    
    function createTransaction(string memory purpose, uint256 amount, address to) public signersOnly returns(bool success){
        // trans = transactions(sign[msg.sender].index,0,new address[](no_signaturies),msg.sender,"",0,0x0000000000000000000000000000000000000000,"");
        trans.id = sign[msg.sender].index+1;
        trans.no_signed=1;
        trans.signed.push(msg.sender);
        trans.executioner = msg.sender;
        trans.purpose = purpose;
        trans.amount = amount;
        trans.to = to;
        trans.index = index;
        sign[msg.sender].transaction.push(trans);
        ++sign[msg.sender].index;
        ++index;
        // pendingTransactions.push(trans);
        // emit TransactionDet(sign[msg.sender].transaction[index].id,sign[msg.sender].transaction[0].no_signed,sign[msg.sender].transaction[0].signed[index], sign[msg.sender].transaction[0].executioner);
        return true;
    }

event Ts(uint t);
event Ac(uint a);
    function signTransaction(address executioner, uint id) public signersOnly returns (bool success){
        // emit Ts(sign[executioner].transaction[id].no_signed);
        for(uint i=0; i<sign[executioner].transaction[id].no_signed; i++){
            require(sign[executioner].transaction[id].signed[i] != msg.sender );
        }

        ++sign[executioner].transaction[id].no_signed;
        sign[executioner].transaction[id].signed.push(msg.sender);
        
        // emit Ts(sign[executioner].transaction[id].no_signed);
        if(sign[executioner].transaction[id].no_signed == 3){
            emit Ts(sign[executioner].transaction[id].no_signed);
            signedTransactions.push(sign[executioner].transaction[id]);
            delete pendingTransactions[sign[executioner].transaction[id].index];
        }
        return true;
    }

    function approve (address _contractAddress, uint transId, address executioner) public signersOnly returns (bool success){
        require(sign[executioner].transaction[transId].no_signed == no_signaturies);
        transferFromContract(sign[executioner].transaction[transId].to, sign[executioner].transaction[transId].amount);
        emit ApproveTransaction(_contractAddress, transId, sign[executioner].transaction[transId].no_signed, executioner,signaturesAuthorized);
        // emit TransferDet(transId, sign[executioner].transaction[transId].no_signed, executioner)
        return false;
    }

    // function allowance(address _owner, address _spender) public view returns (uint256 remaining){

    // }

    function assignSignaturies(address treasurer, address financeOfficer, address president) public returns (bool success) {
        // sig = signaturies(true,0, transactions(index,0,new address[](no_signaturies),msg.sender,"",0,0x0000000000000000000000000000000000000000,''));
        sign[treasurer].signer=true;
        sign[treasurer].receipts=new string[](sign[msg.sender].index+1);
        sign[financeOfficer].signer=true;
        sign[financeOfficer].receipts=new string[](sign[msg.sender].index+1);
        sign[president].signer=true;
        sign[president].receipts=new string[](sign[msg.sender].index+1);
        signaturesAuthorized.push(treasurer);
        signaturesAuthorized.push(financeOfficer);
        signaturesAuthorized.push(president);
        no_signaturies = 3;
        emit SignaturiesCreated(treasurer,financeOfficer, president);
        return true;
    }

    function addSignatory(address[] memory signers) public returns (bool success) {

        uint len = signers.length;

        for(uint i = 0; i < len; i++){
            sign[signers[i]];
            sign[signers[i]].receipts=new string[](sign[msg.sender].index+1);
            signaturesAuthorized.push(signers[i]);
        }
        no_signaturies += len; 
        emit AddSignaturies(signers);
        return true;
    }

    function saveReceipt(string memory receipt) public returns (bool successs){
        sign[msg.sender].receipts.push(receipt);
        sign[msg.sender].transaction[sign[msg.sender].index - 1].txHash=receipt;
        trans.txHash=receipt;
        pendingTransactions.push(trans);
        // emit ReceiptDetails(sign[msg.sender].receipts);
        return true;
    } 

    function viewSignedTransactions() public returns(bool success){
        
        // emit SignedTransactions(signedTransactions);
        return true;
    }

    function viewPendingTransactions() public returns(bool success){
        
        // emit PendingTransactions(pendingTransactions);
        // return pendingTransactions
        return true;
    }

    function pendingTransactionsLength() public view returns(uint length){
        return pendingTransactions.length;
    }

    function signedTransactionsLength() public view returns(uint length){
        return signedTransactions.length;
    }

    // function getPendingTransaction(uint indexA) public returns(bool success){
    //     transactions memory a = pendingTransactions[index];

    //     emit PendingTransaction(a.id,a.no_signed,a.signed,a.executioner,a.purpose,a.amount,a.to,a.txHash);
    //     return true;
    // }

}
import { combineReducers } from 'redux'
import AdminUi from './ui/adminPaymentPgUI'
import SrcUi from './ui/srcPaymentPgUI'
import TransactionUi from './ui/transactionPgUI'
import CommentBoxUi from './ui/commentBoxUi'
//wallet Page
import ToggleTab from './ui/walletReducer';
import Test from './data/test';
import Data from './data/orgDetReducer'
import AdminLogin from './data/adminLoginReducer'
import AdminUsername from './data/adminUsernameReducer'
import AdminPassword from './data/adminPasswordReducer'
import FetchAdmins from './data/fetchAdminsReducer'
import CreateTransaction from './data/createTransactionReducer'
import ViewPendingTransactions from './data/viewPendingTransactions'
import ViewSignedTransactions from './data/viewSignedTransactionReducer'
import SaveReceipt from './data/saveReceipt'
import SignTransaction from './data/signTransactionReducer'
import PendingTransactionsPanel from './ui/pendingTransPanel'
//Forms
import { reducer as formReducer } from 'redux-form'
//Web3 provider info
import InitWeb3 from './data/initWeb3Reducer'
//Contract json
import ContractJSON from './data/contractReducer'
//Truffle Contract
import TruffleContract from './data/initTruffleContractReducer'
import {drizzleReducers} from 'drizzle'
import drizzle from '../reducers/data/drizzleReducer'
import PaneClicked from './ui/paneClickedReducer'
import SignBtnState from './ui/signBtnReducer'


const RootReducer = combineReducers({
    AdminUi,
    SrcUi,
    TransactionUi,
    CommentBoxUi,
    ToggleTab,
    Test,
    Data,
    // ...drizzleReducers,
    // drizzle,
    // PendingTransactionsPanel,
    SignBtnState,
    PaneClicked,
    AdminLogin,
    AdminUsername,
    AdminPassword,
    form:formReducer,
    FetchAdmins,
    TruffleContract,
    ContractJSON,
    InitWeb3,
    SaveReceipt,
    ViewPendingTransactions,
    ViewSignedTransactions,
    CreateTransaction,
    SignTransaction,
    
})

export default RootReducer;
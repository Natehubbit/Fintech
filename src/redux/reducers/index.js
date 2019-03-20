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
//Forms
import { reducer as formReducer } from 'redux-form'
//Blockchain
import BlockchainInfo from './data/blockchainReducer'


const RootReducer = combineReducers({
    AdminUi,
    SrcUi,
    TransactionUi,
    CommentBoxUi,
    ToggleTab,
    Test,
    Data,
    AdminLogin,
    AdminUsername,
    AdminPassword,
    form:formReducer,
    FetchAdmins,
    BlockchainInfo,
})

export default RootReducer;
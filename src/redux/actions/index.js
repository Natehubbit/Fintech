import {
    TOGGLE_ORGANIZATION_DETAILS_ADMIN,
    TOGGLE_ORGANIZATION_DETAILS_SRC,
    TOGGLE_COMMENT_BOX,
    TOGGLE_SEE,
    TOGGLE_SEE_MORE,
    TOGGLE_SIGNED_TRANSACTIONS_TAB,
    TOGGLE_PENDING_TRANSACTIONS_TAB,
    CANCEL_BUTTON_CLICKED,
    SIGN_BUTTON_CLICKED,
    // SRC_PAYMENT_SUBMIT,
} from "../container/ui";
import { 
    LOAD_ORG_DETAILS, 
    SUBMIT_ADMIN_LOGIN, 
    ADMIN_PASSWORD_ENTERED, 
    ADMIN_USERNAME_ENTERED, 
    FETCH_ADMINS,
    CREATE_TRANSACTION,
    SAVE_RECEIPT,
    VIEW_PENDING_TRANSACTIONS,
    VIEW_SIGNED_TRANSACTIONS,
    INIT_WEB3,
    INIT_TRUFFLE_CONTRACT,
    SIGN_TRANSACTION,
    // CONTRACT_JSON
} from "../container/data";
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'

import ContractAbi from '../../ledger/build/contracts/Token.json'
import pendingTransactions from "../../components/pendingTransactions";

export const signaturies = {
    treasurer:'0x37b806cF4f6eFFF4f452De0B4042340eC13aBDF7',
    financeOfficer: '0x93AE41b57887f9B3abd58fdaFF80C6fc36E2Ffb5',
    president: '0x6825539c4A7CE4F05Af3Be9959d6715F5C0A51CC',

}


// let account = null;
let ins = null;
export const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
export let provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
export let TokenContract = TruffleContract(ContractAbi)
TokenContract.setProvider(provider);


export function viewOrganizationDetailsAdmin(view) {
    let action = {
        type: TOGGLE_ORGANIZATION_DETAILS_ADMIN,
        view
    }
    return action
}

export function viewOrganizationDetailsSrc(view) {
    let action = {
        type: TOGGLE_ORGANIZATION_DETAILS_SRC,
        view
    }
    return action
}

export function toggleCommentBox(commentBox) {
    let action = {
        type: TOGGLE_COMMENT_BOX,
        commentBox
    }
    return action
}

export function toggleSee(see, seeMore) {
    let action = {
        type: TOGGLE_SEE,
        payload: {
            see,
            seeMore
        }
    }
    return action
}

export function toggleSeeMore(seeMore) {
    let action = {
        type: TOGGLE_SEE_MORE,
        seeMore
    }
    return action
}

//Wallet Page
export function toggleSignedTab(toggle) {
    let action = {
        type: TOGGLE_SIGNED_TRANSACTIONS_TAB,
        toggle
    }
    return action
}
export function togglePendingTab(toggle) {
    let action = {
        type: TOGGLE_PENDING_TRANSACTIONS_TAB,
        toggle
    }
    return action
}


export function transactionClicked(toggle) {
    let action = {
        type: TOGGLE_SIGNED_TRANSACTIONS_TAB,
        toggle
    }
    return action
}
export function destroyTransaction(toggle) {
    let action = {
        type: CANCEL_BUTTON_CLICKED,
        toggle
    }
    return action
}
export function signTransaction(toggle) {
    let action = {
        type: SIGN_BUTTON_CLICKED,
        toggle
    }
    return action
}

export const loadOrgData = () => dispatch => {
    fetch('http://fintech/orgDet')
    .then(res => res.json())
    .then(data => dispatch({
        type:LOAD_ORG_DETAILS,
        data
    }))
}

export const signBtnClicked = () => dispatch => {
    fetch('http://fintech/test')
    .then(res => res.json())
    .then(data => dispatch({
        type:SIGN_BUTTON_CLICKED,
        data
    }))
} 

export const updateUserName = (data)=>{
    let action = {
        type: ADMIN_USERNAME_ENTERED,
        data
    }
    return action
}

export const updatePass = (data)=>{
    let action = {
        type: ADMIN_PASSWORD_ENTERED,
        data
    }
    return action
}

export const adminLoginValidation = details => dispatch =>{
    fetch('http://fintech/adminLoginSubmit',{
        method:'POST',
        body: JSON.stringify(details)
    })
    .then(res=>res.json())
    .then(data=>dispatch({
        type: SUBMIT_ADMIN_LOGIN,
        data
    }))
}

export const fetchAdmins = ()=>dispatch=>{
    fetch('http://fintech/fetchAdmins')
    .then(res=>res.json())
    .then(data=>dispatch({
        type: FETCH_ADMINS,
        data
    }))
};

export const initWeb3 = ()=>{
    let action = {
        type:INIT_WEB3,
        data:web3
    }
    // console.log('Init Web3',web3)
    return action
}


export const initTruffleContract = ()=>dispatch => {
    console.log('Initilaizing Truffle Contract...........')
    let action = {
        type: INIT_TRUFFLE_CONTRACT,
            data: TokenContract,
    }
    return action
}


export const createTransaction = (purpose,amount,walletAddress)=>dispatch=>{
    // console.log(1)
    TokenContract.deployed().then(i=>{
        // console.log(11)
        return i;
    }).then(ins=>{
        console.log(2)
        web3.eth.getCoinbase((err,acc)=>{
            // console.log(3)
            return acc
        }).then((account)=>{
            console.log(4)
            console.log('Creating Transaction............',account)
            return ins.createTransaction(purpose,amount,walletAddress,{from:account,gas:5000000})
        }).then((data)=>{
            // console.log(5)
            web3.eth.getCoinbase((err,acc)=>{
                return acc
            }).then(account =>{
                // console.log(6)
                console.log('Saving Transaction Receipt............',account)
                return ins.saveReceipt(data.tx,{from:account,gas:5000000});
            }).then(()=>{
                // console.log(7)
                console.log('Receipt Saved')
            })
            dispatch({
                type:CREATE_TRANSACTION,
                data
            })
        })
    })
}



// export const saveReceipt = (receipt)=>dispatch=>{
//     web3.eth.getCoinbase((err,acc)=>{
//         return acc
//     }).then(a=>{
//         console.log('Saving Receipt.........')
//         return ins.saveReceipt(receipt,{from:a,gas:5000000});
//     }).then(data=>dispatch({
//         type: SAVE_RECEIPT,
//         data,
//     })).then(()=>console.log('Receipt Saved'))
// }


export const viewPendingTransactions = ()=>dispatch=>{
    let data = []
    console.log("Fetching pending Transactions..........")
    TokenContract.deployed().then(i=>{
        return i;
    }).then(ins=>{
        let account = null;
        web3.eth.getCoinbase((err,acc)=>{
            return acc
        }).then(a=>{
            account = a
            // console.log(1)
            return ins.pendingTransactionsLength.call({from:account,gas:500000});
        }).then(len=>{
            // console.log(2)
            console.log('Length: ',len.toNumber())
            for(let i = 0; i<len.toNumber(); i++){
                let trans = {}
                TokenContract.deployed().then(i=>{
                    // console.log(3)
                    return ins;
                }).then(ins=>{
                    // console.log(4)
                    return ins.getPendingTransaction(i,{from:account,gas:500000})
                }).then(t=>{
                    console.log(t)
                    let b=t.logs[0].args
                    trans.id = b.id.toNumber()
                    trans.no_signed = b.no_signed.toNumber()
                    trans.signed = b.signed
                    trans.signed = b.executioner
                    trans.purpose = b.purpose
                    trans.to = b.to
                    trans.txHash = b.txHash
                })
                data[i]=trans
            }
           
        })
        return data;
    }).then(data=>{
        dispatch({
            type: VIEW_PENDING_TRANSACTIONS,
            data
        })
    })
}

export const viewSignedTransactions = ()=>dispatch=>{
        web3.eth.getCoinbase((err,acc)=>{
            return acc
        }).then(a=>{
            return ins.signedTransactionsLength.call({from:a,gas:500000});
        }).then(a=>{
            
        }).then(data=>{
            dispatch({
                type: VIEW_SIGNED_TRANSACTIONS,
                data
            })
        })
}

export const signTransactions = (a,b,c)=>dispatch=>{
    web3.eth.getCoinbase((err,acc)=>{
        return acc
    }).then(a=>{
        return ins.signTransaction(a,b,c,{from:a,gas:500000});
    }).then(data=>dispatch({
        type: SIGN_TRANSACTION,
        data
    }))
}


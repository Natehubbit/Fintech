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
} from "../container/ui";
import { 
    LOAD_ORG_DETAILS, 
    SUBMIT_ADMIN_LOGIN, 
    ADMIN_PASSWORD_ENTERED, 
    ADMIN_USERNAME_ENTERED, 
    FETCH_ADMINS,
    BLOCK_CHAIN_DETAILS,
    // CONTRACT_JSON
} from "../container/data";
import Web3 from 'web3'


import TokenContract from '../../ledger/build/contracts/Token.json'

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

export const blockchainData= dispatch=>{
    
}



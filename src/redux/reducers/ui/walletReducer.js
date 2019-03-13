import { TOGGLE_PENDING_TRANSACTIONS_TAB, TOGGLE_SIGNED_TRANSACTIONS_TAB } from "../../container/ui";

const ui = {
    pendingTab: true,
    signedTab: false,
    transactionClicked: false,
    signButtonClicked: false,
    cancelButtonClicked: false
}

export default (state = ui, action) => {
    switch (action.type) {
        case TOGGLE_PENDING_TRANSACTIONS_TAB:
            return {
                pendingTab: true,
                signedTab: false,
            }
        case TOGGLE_SIGNED_TRANSACTIONS_TAB:
            return {
                pendingTab: false,
                signedTab: true,
            }
        default:
            return state;
    }
}
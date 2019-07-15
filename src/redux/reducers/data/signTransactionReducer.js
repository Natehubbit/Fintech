import { SIGN_TRANSACTION } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case SIGN_TRANSACTION:
            return action.data
        default:
            return state;
    }
}
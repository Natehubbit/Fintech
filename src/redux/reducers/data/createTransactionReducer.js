import { CREATE_TRANSACTION } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case CREATE_TRANSACTION:
            
            return action.data.tx;
        default:
            return state;
    }
}
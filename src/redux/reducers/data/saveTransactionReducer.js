import { SAVE_TRANSACTION } from "../../container/data";
let data = {}
export default (state=data, action) => {
    switch (action.type) {
        case SAVE_TRANSACTION:
            return action.data;
        default:
            return state;
    }
}
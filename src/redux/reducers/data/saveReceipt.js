import { SAVE_RECEIPT } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case SAVE_RECEIPT:
            return action.data;
        default:
            return state;
    }
}
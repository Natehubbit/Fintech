import { VIEW_SIGNED_TRANSACTIONS } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case VIEW_SIGNED_TRANSACTIONS:
            return action.data;
        default:
            return state;
    }
}
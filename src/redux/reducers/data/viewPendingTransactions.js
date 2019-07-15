import { VIEW_PENDING_TRANSACTIONS } from "../../container/data";



export default (state={}, action) => {
    switch (action.type) {
        case VIEW_PENDING_TRANSACTIONS:
        // console.log(action.data)
            return action.data;
        default:
            return state;
    }
}
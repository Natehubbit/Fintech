import { BLOCK_CHAIN_DETAILS } from "../../container/data";

let data = {}
export default (state=data, action) => {
    switch (action.type) {
        case BLOCK_CHAIN_DETAILS:
            return action.data
        default:
            return state;
    }
}
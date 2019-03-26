import { INIT_TRUFFLE_CONTRACT } from "../../container/data";

const data = {}
export default (state=data, action) => {
    switch (action.type) {
        case INIT_TRUFFLE_CONTRACT:
            return action.data;
        default:
            return state;
    }
}
import { INIT_WEB3 } from "../../container/data";

const data = {}
export default (state=data, action) => {
    switch (action.type) {
        case INIT_WEB3:
            return action.data;
        default:
            return state;
    }
}
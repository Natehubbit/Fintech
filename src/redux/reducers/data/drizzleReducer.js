import { INIT_DRIZZLE } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case INIT_DRIZZLE:
            return action.data
        default:
            return state;
    }
}
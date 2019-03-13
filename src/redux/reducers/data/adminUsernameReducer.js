import { ADMIN_USERNAME_ENTERED } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case ADMIN_USERNAME_ENTERED:
            return action.data;
        default:
            return state;
    }
}
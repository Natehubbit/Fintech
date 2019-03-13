import { ADMIN_PASSWORD_ENTERED } from "../../container/data";

export default (state={}, action) => {
    switch (action.type) {
        case ADMIN_PASSWORD_ENTERED:
            return action.data;
        default:
            return state;
    }
}
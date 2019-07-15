import { FETCH_ADMINS } from "../../container/data";
const data = {}
export default (state=data, action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            console.log('fetchAdmins reducer ',action.data)
            return action.data;
        default:
            return state;
    }
}
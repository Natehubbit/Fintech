import { SUBMIT_ADMIN_LOGIN } from "../../container/data";
let data = {}
export default (state=data, action) => {
    switch (action.type) {
        case SUBMIT_ADMIN_LOGIN:
            console.log('adminlogin reducer ',action.data)
            return action.data;
        default:
            return state;
    }
}
import { SIGN_BUTTON_CLICKED } from "../../container/ui";

const data = {
    id:"",
    first_name:"",
    last_name:"",
    class:"",
    eth_address:"",
    hall:"",
    contact:"",
    resident_status:"",
    index_no:"",
    ref_no:"",
    sex:""
}

export default (state = data, action) => {
    switch (action.type) {
        case SIGN_BUTTON_CLICKED:
            console.log('action.data[0]', action.data[0])
            return action.data[0];
        default:
            return data;
    }
}
import { LOAD_ORG_DETAILS } from "../../container/data";

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
        case LOAD_ORG_DETAILS:
            // console.log('orgDetails reducer data', action.data[0])
            return action.data[0];
        default:
            return data;
    }
}
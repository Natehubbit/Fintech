import { LOAD_PERSON } from "../../container/data";
let data = {
    id:'',
    eth_address:'',
    first_name:'',
    last_name:'',
    contact:'',
}
export default (state=data, action) => {
    switch (action.type) {
        case LOAD_PERSON:
            // console.log('REDUCER',action.data)
            return action.data;
        default:
            return state;
    }
}
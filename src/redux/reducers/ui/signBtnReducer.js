import { TOGGLE_BUTTONS } from "../../container/ui";


let btnState = {
    id:null,
    exec:null,
    init:true,
}

export default (state = btnState, action) => {
    switch (action.type) {
        case TOGGLE_BUTTONS:
            console.log('Executioner',action.view.exec,'Index',action.view.id)
            return action.view;
        default:
            return state;
    }
}
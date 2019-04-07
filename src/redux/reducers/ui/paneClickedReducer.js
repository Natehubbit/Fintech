import { PANE_CLICKED } from "../../container/ui";


export default (state = {}, action) => {
    switch (action.type) {
        case PANE_CLICKED:
            return action.view;
        default:
            return state;
    }
}
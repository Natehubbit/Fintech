import { ADJUST_PENDING_PANEL } from "../../container/ui";

const ui = {
    view: 12
}

export default (state = ui, action) => {
    switch (action.type) {
        case ADJUST_PENDING_PANEL:
            return action.view;
        default:
            return state.view;
    }
}
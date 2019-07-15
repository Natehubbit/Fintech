import { TOGGLE_ORGANIZATION_DETAILS_SRC } from "../../container/ui";

const ui = {
    view: false
}

export default (state = ui, action) => {
    switch (action.type) {
        case TOGGLE_ORGANIZATION_DETAILS_SRC:
            return !action.view;
        default:
            return state;
    }
}
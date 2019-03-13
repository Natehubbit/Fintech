import { TOGGLE_COMMENT_BOX } from "../../container/ui";

const ui = {
    commentBox: false
}

export default (state = ui, action) => {
    switch (action.type) {
        case TOGGLE_COMMENT_BOX:
            return !action.commentBox;
        default:
            return state;
    }

}
import { TOGGLE_SEE_MORE, TOGGLE_SEE } from "../../container/ui";

const ui = {
    seeMore: false,
    see: 'fa fa-angle-down',
    commentBox: false
}

export default (state = ui, action) => {
    switch (action.type) {
        case TOGGLE_SEE_MORE:
            return {
                seeMore: !action.seeMore
            }

        case TOGGLE_SEE:
            let see = state.see
            let seeMore = state.seeMore

            if (action.payload.seeMore) {
                see = 'fa fa-angle-down'
                seeMore = !state.seeMore
            } else {
                see = 'fa fa-angle-up'
                seeMore = !state.seeMore
            }
            return {
                see,
                seeMore
            }

        default:
            return state;
    }

}
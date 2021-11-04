import * as actions from "../actionTypes";

function counter(state = 0, action) {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;
        case actions.DECREMENT:
            return state - 1;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default counter;

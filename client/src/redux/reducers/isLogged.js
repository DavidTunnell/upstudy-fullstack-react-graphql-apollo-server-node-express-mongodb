import * as actions from "../actionTypes";

const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case actions.SIGN_IN:
            return true;
        case actions.SIGN_OUT:
            return false;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
};

export default isLoggedReducer;

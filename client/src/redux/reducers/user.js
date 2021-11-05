import * as actions from "../actionTypes";

function userReducer(state = 0, action) {
    switch (action.type) {
        case actions.LOGIN_REDUX:

        //






            console.log(action.payload);
            return state + action.payload.incrementBy;
        case actions.LOGOUT_REDUX:
            return state - action.payload.decrementBy;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default userReducer;

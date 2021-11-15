import * as actions from "../actionTypes";

function userReducer(state = { loggedIn: false }, action) {
    switch (action.type) {
        case actions.LOGIN_REDUX:
            console.log(action);
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                isVerified: action.payload.isVerified,
                loggedIn: true,
                roles: action.payload.roles,
                profilePic: action.payload.profilePic,
            };
        case actions.LOGOUT_REDUX:
            console.log(action);
            return {
                loggedIn: false,
            };
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default userReducer;

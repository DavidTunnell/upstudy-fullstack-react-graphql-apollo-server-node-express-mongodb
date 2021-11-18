import * as actions from "../actionTypes";

function userReducer(state = { loggedIn: false }, action) {
    switch (action.type) {
        case actions.LOGIN_REDUX:
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
            return {
                loggedIn: false,
            };
        case actions.UPDATE_PROFILE_PIC_REDUX:
            return {
                ...state, // take copy of state object
                profilePic: action.payload.profilePic, // this will override the old
            };
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default userReducer;

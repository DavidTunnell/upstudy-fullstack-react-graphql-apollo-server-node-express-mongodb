import * as actions from "../actionTypes";

export const loginRedux = (
    id,
    username,
    email,
    isVerified,
    roles,
    profilePic
) => {
    return {
        type: actions.LOGIN_REDUX,
        payload: { id, username, email, isVerified, roles, profilePic },
    };
};
export const logoutRedux = () => {
    return { type: actions.LOGOUT_REDUX };
};

export const updateProfilePicRedux = (userId, profilePic) => {
    return {
        type: actions.UPDATE_PROFILE_PIC_REDUX,
        payload: { userId, profilePic },
    };
};

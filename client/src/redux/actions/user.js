import * as actions from "../actionTypes";

export const loginRedux = (id, username, email, isVerified, roles) => {
    return {
        type: actions.LOGIN_REDUX,
        payload: { id, username, email, isVerified, roles },
    };
};
export const logoutRedux = () => {
    return { type: actions.LOGOUT_REDUX };
};

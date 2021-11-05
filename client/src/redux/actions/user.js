import * as actions from "../actionTypes";

export const loginRedux = (incrementBy) => {
    return { type: actions.LOGIN_REDUX, payload: { incrementBy } };
};
export const logoutRedux = (decrementBy) => {
    return { type: actions.LOGOUT_REDUX, payload: { decrementBy } };
};

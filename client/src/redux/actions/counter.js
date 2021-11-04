import * as actions from "../actionTypes";

export const increment = () => {
    return { type: actions.INCREMENT };
};
export const decrement = () => {
    return { type: actions.DECREMENT };
};

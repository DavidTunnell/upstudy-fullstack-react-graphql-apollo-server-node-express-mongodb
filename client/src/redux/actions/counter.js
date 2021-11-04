import * as actions from "../actionTypes";

export const increment = async () => {
    return { type: actions.INCREMENT };
};
export const decrement = () => {
    return { type: actions.DECREMENT };
};

import * as actions from "../actionTypes";

export const increment = (incrementBy) => {
    return { type: actions.INCREMENT, payload: { incrementBy } };
};
export const decrement = (decrementBy) => {
    return { type: actions.DECREMENT, payload: { decrementBy } };
};

import * as actions from "./actionTypes";

export const bugAdded = (description) => {
    return { type: actions.BUG_ADDED, payload: { description } };
};

export const bugRemoved = (id) => {
    return { type: actions.BUG_REMOVED, payload: { id } };
};

export const bugResolved = (id) => {
    return { type: actions.BUG_RESOLVED, payload: { id } };
};

export const increment = () => {
    return { type: actions.INCREMENT };
};
export const decrement = () => {
    return { type: actions.DECREMENT };
};

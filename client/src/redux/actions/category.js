import * as actions from "../actionTypes";

export const category = (id) => {
    return { type: actions.CATEGORY, payload: { id } };
};

import * as actions from "../actionTypes";

export const filterCategories = (data) => {
    return { type: actions.FILTER_CATEGORIES, payload: { data } };
};

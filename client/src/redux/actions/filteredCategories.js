import * as actions from "../actionTypes";

export const filterCategories = (data) => {
    return { type: actions.FILTER_CATEGORIES, payload: { data } };
};

export const setAllCategories = (data) => {
    return { type: actions.SET_ALL_CATEGORIES, payload: { data } };
};

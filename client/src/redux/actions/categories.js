import * as actions from "../actionTypes";

export const categories = (allCategories) => {
    return { type: actions.CATEGORIES, payload: allCategories };
};
export const category = (id) => {
    return { type: actions.CATEGORY, payload: { id } };
};
export const filterCategories = (userInput) => {
    return { type: actions.FILTER_CATEGORIES, payload: { userInput } };
};

import * as actions from "../actionTypes";

export const categories = (allCategories) => {
    return { type: actions.CATEGORIES, payload: allCategories };
};
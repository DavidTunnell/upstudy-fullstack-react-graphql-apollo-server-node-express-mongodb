import * as actions from "../actionTypes";

export const filterCategories = (userInput) => {
    return { type: actions.FILTER_CATEGORIES, payload: { userInput } };
};

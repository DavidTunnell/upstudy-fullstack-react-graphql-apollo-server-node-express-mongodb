import * as actions from "../actionTypes";

function filteredCategoriesReducer(state = [], action) {
    switch (action.type) {
        case actions.SET_ALL_CATEGORIES:
            if (action.payload) {
                return action.payload.data.subjects;
            }
            return state;
        case actions.FILTER_CATEGORIES:
            const categoriesArray = action.payload.data.categories;
            const userInput = action.payload.data.value;

            //https://stackoverflow.com/questions/44312924/filter-array-of-objects-whose-any-properties-contains-a-value
            return categoriesArray.filter((o) =>
                Object.keys(o).some((k) =>
                    o[k].toLowerCase().includes(userInput.toLowerCase())
                )
            );
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default filteredCategoriesReducer;

import * as actions from "../actionTypes";

function filteredCategoriesReducer(state = [], action) {
    switch (action.type) {
        case actions.FILTER_CATEGORIES:
            console.log("FILTER_CATEGORIES-separate in reducer");
            // console.log(action.payload.userInput);
            return state;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default filteredCategoriesReducer;

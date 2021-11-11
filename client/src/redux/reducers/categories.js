import * as actions from "../actionTypes";

function categoriesReducer(state = [], action) {
    switch (action.type) {
        case actions.CATEGORIES:
            if (action.payload) {
                return action.payload.subjects;
            }
            return state;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default categoriesReducer;

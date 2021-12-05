import * as actions from "../actionTypes";

function bookmarksReducer(state = [], action) {
    switch (action.type) {
        case actions.BOOKMARKS:
            if (action.payload) {
                return action.payload;
            }
            return state;
        case actions.CLEAR_BOOKMARKS:
            return [];
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default bookmarksReducer;

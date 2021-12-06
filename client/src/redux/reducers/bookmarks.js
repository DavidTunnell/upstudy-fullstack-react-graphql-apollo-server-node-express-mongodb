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
        case actions.ARCHIVE_BOOKMARK_REDUX:
            if (action.payload) {
                const bookmarkId = action.payload;
                console.log("actions.ARCHIVE_BOOKMARK_REDUX");
                console.log(bookmarkId);
                console.log(state);
                console.log("actions.ARCHIVE_BOOKMARK_REDUX");

                //statelessly update
                return action.payload;
            }
            return state;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default bookmarksReducer;

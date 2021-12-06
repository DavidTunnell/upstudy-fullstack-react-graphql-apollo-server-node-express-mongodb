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
                // 1. Make a shallow copy of the items
                let items = [...state];
                // 2. Make a shallow copy of the item you want to mutate and update it
                const foundIndex = items.findIndex((x) => x._id === bookmarkId);
                items[foundIndex].archived = true;
                //statelessly update
                return items;
            }
            return state;
        case actions.ADD_BOOKMARK_REDUX:
            if (action.payload) {
                // userId: user.id,
                // categoryId: categoryId,
                // name: categoryName,
                // type: "category",
                // path: path,

                const bookmark = action.payload;
                console.log("???>>>>>>>");

                console.log(bookmark);
                console.log(bookmark.bookmarkId);
                console.log(bookmark.categoryId);
                console.log(bookmark.name);
                console.log(bookmark.path);
                console.log(bookmark.type);
                console.log(bookmark.userId);
                console.log("test");
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>");

                // 1. Make a shallow copy of the items
                let items = [...state];
                items.push({
                    _id: bookmark.bookmarkId,
                    name: bookmark.name,
                    type: bookmark.type,
                    path: bookmark.path,
                    archived: false,
                    categoryId: bookmark.categoryId,
                });
                return items;
            }
            return state;
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default bookmarksReducer;

import * as actions from "../actionTypes";

export const bookmarks = (allBookmarks) => {
    return { type: actions.BOOKMARKS, payload: allBookmarks };
};

export const clearBookmarks = () => {
    return { type: actions.CLEAR_BOOKMARKS };
};

export const archiveBookmarkRedux = (bookmarkId) => {
    return { type: actions.ARCHIVE_BOOKMARK_REDUX, payload: bookmarkId };
};

export const unarchiveBookmarkRedux = (categoryId) => {
    return { type: actions.UNARCHIVE_BOOKMARK_REDUX, payload: categoryId };
};

export const addBookmarkRedux = (
    bookmarkId,
    userId,
    categoryId,
    name,
    type,
    path
) => {
    return {
        type: actions.ADD_BOOKMARK_REDUX,
        payload: { bookmarkId, userId, categoryId, name, type, path },
    };
};

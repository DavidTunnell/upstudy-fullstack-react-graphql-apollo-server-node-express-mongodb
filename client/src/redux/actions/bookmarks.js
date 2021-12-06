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

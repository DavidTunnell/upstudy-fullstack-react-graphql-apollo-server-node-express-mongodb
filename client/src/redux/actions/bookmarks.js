import * as actions from "../actionTypes";

export const bookmarks = (allBookmarks) => {
    return { type: actions.BOOKMARKS, payload: allBookmarks };
};

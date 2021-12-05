import * as actions from "../actionTypes";

export const bookmarks = (allBookmarks) => {
    console.log("allBookmarks");
    console.log(allBookmarks);
    console.log("allBookmarks");
    return { type: actions.BOOKMARKS, payload: allBookmarks };
};

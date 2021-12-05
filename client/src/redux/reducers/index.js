import counterReducer from "./counter";
import modalReducer from "./modal";
import userReducer from "./user";
import categoriesReducer from "./categories";
import categoryReducer from "./category";
import filteredCategoriesReducer from "./filteredCategories";
import bookmarksReducer from "./bookmarks";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    loggedInUser: userReducer,
    counter: counterReducer,
    modalSettings: modalReducer,
    categories: categoriesReducer,
    filteredCategories: filteredCategoriesReducer,
    currentCategory: categoryReducer,
    userBookmarks: bookmarksReducer,
});

export default allReducers;

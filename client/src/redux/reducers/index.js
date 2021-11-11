import counterReducer from "./counter";
import modalReducer from "./modal";
import userReducer from "./user";
import categoriesReducer from "./categories";
import categoryReducer from "./category";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    loggedInUser: userReducer,
    counter: counterReducer,
    modalSettings: modalReducer,
    categories: categoriesReducer,
    currentCategory: categoryReducer,
});

export default allReducers;

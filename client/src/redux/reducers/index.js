import counterReducer from "./counter";
import modalReducer from "./modal";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    loggedInUser: userReducer,
    counter: counterReducer,
    modalSettings: modalReducer,
});

export default allReducers;

import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import bugTrackerReducer from "./bugTracker";
import modalReducer from "./modal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedReducer,
    bugTrackerData: bugTrackerReducer,
    modalSettings: modalReducer,
});

export default allReducers;

import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import bugTrackerReducer from "./bugTracker";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedReducer,
    bugTrackerData: bugTrackerReducer,
});

export default allReducers;

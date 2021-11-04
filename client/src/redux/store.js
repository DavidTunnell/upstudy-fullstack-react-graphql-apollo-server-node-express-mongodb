import { createStore } from "redux";
import allReducers from "./reducers";

//create store is a higher order function that creates an initial store
const store = createStore(
    allReducers,
    //allows use of redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

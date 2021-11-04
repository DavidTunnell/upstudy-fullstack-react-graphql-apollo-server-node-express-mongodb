import { createStore } from "redux";
import allReducers from "./reducers";

//create store is a higher order function that creates an initial store
const store = createStore(allReducers);

export default store;

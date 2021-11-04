import { createStore } from "redux";
import bugTracker from "./reducers/bugTracker";
import counter from "./reducers/counter";

// //create store is a higher order function that creates an initial store
const bugTrackerStore = createStore(bugTracker);
const counterStore = createStore(counter);

export { bugTrackerStore, counterStore };

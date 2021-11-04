import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { bugTrackerStore, counterStore } from "./redux/store";
import { increment, decrement, bugAdded, bugRemoved } from "./redux/actions";

//Redux Store - Globalized State
bugTrackerStore.subscribe(() =>
    console.log("bugTrackerStore updated: ", bugTrackerStore.getState())
);
counterStore.subscribe(() =>
    console.log("counterStore updated: ", bugTrackerStore.getState())
);

bugTrackerStore.dispatch(bugAdded("Bug #1"));
bugTrackerStore.dispatch(bugAdded("Bug #2"));

counterStore.dispatch(increment());
counterStore.dispatch(increment());
counterStore.dispatch(decrement());

bugTrackerStore.dispatch(bugAdded("Bug #3"));
bugTrackerStore.dispatch(bugRemoved(2));

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
//this connects the store to the whole app by wrapping it
import { Provider } from "react-redux";

// import { increment, decrement } from "./redux/actions/counter";
// import { bugAdded, bugRemoved, bugResolved } from "./redux/actions/bugTracker";

// //Redux Store - Globalized State
// store.subscribe(() =>
//     console.log("combined store updated: ", store.getState())
// );

// store.dispatch(bugAdded("Bug #1"));
// store.dispatch(bugAdded("Bug #2"));

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

// store.dispatch(bugResolved(1));
// store.dispatch(bugAdded("Bug #3"));
// store.dispatch(bugRemoved(2));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

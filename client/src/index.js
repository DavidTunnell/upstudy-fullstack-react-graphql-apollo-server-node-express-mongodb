import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
//this connects the store to the whole app by wrapping it
import { Provider } from "react-redux";

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

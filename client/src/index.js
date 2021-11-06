import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
//this connects the store to the whole app by wrapping it
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

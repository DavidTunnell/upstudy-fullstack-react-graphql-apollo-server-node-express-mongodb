import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        {/* wraps app with redux store to be used everywhere*/}
        <Provider store={store}>
            {/* enables persistence of redux store on server reload of pages*/}
            <PersistGate loading={null} persistor={persistor}>
                {/* enables use of url router for react*/}
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

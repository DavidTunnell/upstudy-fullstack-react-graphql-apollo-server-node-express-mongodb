import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import VerifyEmail from "./components/VerifyEmail";
import Error from "./components/Error";
import ForgotPassword from "./components/ForgotPassword";
import Auth from "./utils/auth";

import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

//top use the react router package, surround the whole app with the router component
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const history = useHistory();
    useEffect(
        () =>
            history.listen(() => {
                setIsLoggedIn(Auth.loggedIn());
                console.log("Auth.loggedIn() was run - token check");
            }),
        []
    );

    return (
        <ApolloProvider client={client}>
            {/* ^ Here the app is wrapped with the router */}
            <div className="App">
                <Header toTop={toTop} isLoggedIn={isLoggedIn} />
                <div className="content">
                    {/* Next is the decision of where page content to go based on different routes
                        All routes go in the switch component so only one renders at a time based on route  */}
                    <Switch>
                        {/* add a route for each component AND the component itself nested*/}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login
                                signInTopVal="383.333px"
                                signInInsideVal="581.075px"
                                signUpTopVal="0px"
                                signUpInsideVal="0px"
                            />
                        </Route>
                        <Route exact path="/signup">
                            <Login
                                signInTopVal="0px"
                                signInInsideVal="0px"
                                signUpTopVal="383.333px"
                                signUpInsideVal="581.075px"
                            />
                        </Route>
                        <Route exact path="/verify">
                            <VerifyEmail />
                        </Route>
                        <Route exact path="/forgot">
                            <ForgotPassword />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard isLoggedIn={isLoggedIn} />
                        </Route>
                        {/* all other routes go to a 404 page - must be at bottom*/}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Route path="/error">
                            <Error error="test" />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                <Footer toTop={toTop} isLoggedIn={isLoggedIn} />
            </div>
        </ApolloProvider>
    );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//top use the react router package, surround the whole app with the router component
function App() {
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Router>
            {/* ^ Here the app is wrapped with the router */}
            <div className="App">
                <Header toTop={toTop} />
                <div className="content">
                    {/* Next is the decision of where page content to go based on different routes
                        All routes go in the switch component so only one renders at a time based on route  */}
                    <Switch>
                        {/* add a route for each component AND the component itself nested*/}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                        {/* all other routes go to a 404 page - must be at bottom*/}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                <Footer toTop={toTop} />
            </div>
        </Router>
    );
}

export default App;

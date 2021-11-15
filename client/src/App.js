import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import VerifyEmail from "./components/VerifyEmail";
import Error from "./components/Error";
import ForgotPassword from "./components/ForgotPassword";
import BetaNotice from "./components/BetaNotice";
import Auth from "./utils/auth";
import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { modalActions, userActions } from "./redux/actions/";
import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "./utils/queries";

//top use the react router package, surround the whole app with the router component
function App() {
    let categories = useSelector((state) => state.categories);
    const { loading, data } = useQuery(GET_SUBJECTS);
    if ((!categories || categories.length === 0) && !loading) {
        //if nothing in redux, pull from dashboard

        console.log("nothing in redux");
        categories = data.subjects;
    }
    const createCategoryPaths = (categories) => {
        const pathArray = [];
        categories.forEach((category) => {
            const path = category.name.toLowerCase().replace(/\s/g, "");
            pathArray.push(path);
        });
        return pathArray;
    };
    const categoryRouterPaths = createCategoryPaths(categories);
    // console.log(categoryRouterPaths);
    //get redux store data for modal
    const modalSettings = useSelector((state) => state.modalSettings); //for putting in modal
    const dispatch = useDispatch();
    //smooth scroll to top function to be passed as a parameter, should this be replaced with ./utils/useScrollToTop?
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    //use react router history
    const history = useHistory();
    //run every change
    useEffect(() => {
        //run only when a router changes
        history.listen(() => {
            //if the user is found not to be logged in via jwt then log them out as far as redux is concerned
            if (!Auth.loggedIn()) {
                dispatch(userActions.logoutRedux());
            }
            console.log("Auth.loggedIn() was run - token check");
        });
    });

    return (
        <>
            {/* ^ the apollo provider wrapper allows the use of graphql calls throughout the app */}
            <div className="App">
                <Header toTop={toTop} />
                <div className="content">
                    {/* switch/route renders different components based on url */}
                    <Switch>
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
                            <Dashboard />
                        </Route>
                        {categoryRouterPaths &&
                            categoryRouterPaths.map((path) => (
                                <Route exact path={`/${path}`}>
                                    {/* next is pass the category object as a parameter here and then consume in category component */}
                                    <Category data={path} />
                                </Route>
                            ))}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Route path="/error">
                            <Error error="test" />
                        </Route>
                        {/* all other routes go to a 404 page - must be at bottom*/}
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                {/* the modal is available everywhere and modified via redux store*/}
                <Modal
                    show={modalSettings.show}
                    title={modalSettings.title}
                    content={modalSettings.content}
                    imageUrl={modalSettings.imageUrl}
                    closeModal={() => dispatch(modalActions.hideModal())}
                />
                <BetaNotice />
                <Footer toTop={toTop} />
            </div>
        </>
    );
}

export default App;

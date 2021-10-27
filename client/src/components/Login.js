import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { USER_LOGIN, ADD_USER } from "../utils/mutations";
import SimpleReactValidator from "simple-react-validator";

import useScrollToTop from "../utils/useScrollToTop";

const Login = ({
    signInTopVal,
    signInInsideVal,
    signUpTopVal,
    signUpInsideVal,
}) => {
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    });
    const [userCreateData, setUserCreateData] = useState({
        createUsername: "",
        createEmail: "",
        createPassword: "",
        repeatPassword: "",
    });
    const [signInTop, setSignInTop] = useState(signInTopVal);
    const [signInInside, setSignInInside] = useState(signInInsideVal);
    const [signUpTop, setSignUpTop] = useState(signUpTopVal);
    const [signUpInside, setSignUpInside] = useState(signUpInsideVal);
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const bgImage = "./assets/images/login-bg.jpg";
    const [login, { error }] = useMutation(USER_LOGIN);
    const [addUser, { err }] = useMutation(ADD_USER);

    const [validatorLogin, setValidatorLogin] = useState(
        new SimpleReactValidator()
    );
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    // validatorLogin.showMessages();
    useEffect(() => {
        setSignInTop(signInTopVal);
        setSignInInside(signInInsideVal);
        setSignUpTop(signUpTopVal);
        setSignUpInside(signUpInsideVal);
    }, [signInTopVal, signInInsideVal, signUpTopVal, signUpInsideVal]);

    // useEffect(() => {
    //     console.log(userCreateData);
    // });

    const handleLoginInputChange = (event) => {
        const { id, value } = event.target;
        setUserLoginData({ ...userLoginData, [id]: value });
    };

    const handleCreateInputChange = (event) => {
        const { id, value } = event.target;
        setUserCreateData({ ...userCreateData, [id]: value });
    };

    const handleFormLogin = async (event) => {
        event.preventDefault();

        if (validatorLogin.allValid()) {
            try {
                const { data } = await login({
                    variables: { ...userLoginData },
                });

                Auth.login(data.login.token);
            } catch (err) {
                console.error(err);
                setShowAlert(true);
            }
        } else {
            validatorLogin.showMessages();
            forceUpdate();
        }
    };

    const handleFormCreate = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: {
                    username: userCreateData.createUsername,
                    email: userCreateData.createEmail,
                    password: userCreateData.createPassword,
                },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
    };

    const handleCardToggle = async (event) => {
        const parentEl = event.target.parentElement;
        if (parentEl.classList.contains("signin-card")) {
            setSignInTop("283.333px");
            setSignInInside("481.075px");
            setSignUpTop("0px");
            setSignUpInside("0px");
        } else if (parentEl.classList.contains("signup-card")) {
            setSignInTop("0px");
            setSignInInside("0px");
            setSignUpTop("283.333px");
            setSignUpInside("481.075px");
        }
    };

    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center vh-100">
                        <div className="col-md-6 col-lg-5">
                            <div
                                className="accordion-group accordion-group-portal"
                                data-accordion-group
                            >
                                <div className="accordion open" data-accordion>
                                    <div
                                        className="signin-card"
                                        onClick={handleCardToggle}
                                    >
                                        <div
                                            className="accordion-control signin-card"
                                            data-control
                                        >
                                            <h5>Sign In</h5>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            style={{
                                                transition:
                                                    "max-height 300ms ease 0s",
                                                maxHeight: signInTop,
                                            }}
                                            data-content
                                        >
                                            <div
                                                className="accordion-content-wrapper"
                                                style={{
                                                    overflow: "hidden",
                                                    transition:
                                                        "max-height 300ms ease 0s",
                                                    maxHeight: signInInside,
                                                }}
                                            >
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="email">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="name@example.com"
                                                            onChange={
                                                                handleLoginInputChange
                                                            }
                                                            value={
                                                                userLoginData.email
                                                            }
                                                            required
                                                        />
                                                        {validatorLogin.message(
                                                            "email",
                                                            userLoginData.email,
                                                            "required|email"
                                                        )}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password"
                                                            onChange={
                                                                handleLoginInputChange
                                                            }
                                                            value={
                                                                userLoginData.password
                                                            }
                                                            required
                                                        />
                                                        {validatorLogin.message(
                                                            "password",
                                                            userLoginData.password,
                                                            "required"
                                                        )}
                                                    </div>
                                                    <Link
                                                        disabled={
                                                            !(
                                                                userLoginData.email &&
                                                                userLoginData.password
                                                            )
                                                        }
                                                        to="/dashboard"
                                                        className="btn btn-primary btn-block"
                                                        onClick={
                                                            handleFormLogin
                                                        }
                                                    >
                                                        Sign In
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" data-accordion>
                                    <div
                                        className="signup-card"
                                        onClick={handleCardToggle}
                                    >
                                        <div
                                            className="accordion-control signup-card"
                                            style={{
                                                transition:
                                                    "max-height 300ms ease 0s",
                                                maxHeight: signUpTop,
                                            }}
                                            data-control
                                        >
                                            <h5>Create Account</h5>
                                        </div>
                                        <div
                                            className="accordion-content create-account-card"
                                            style={{
                                                overflow: "hidden",
                                                transition:
                                                    "max-height 300ms ease 0s",
                                                maxHeight: signUpInside,
                                            }}
                                            data-content
                                        >
                                            <div className="accordion-content-wrapper">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="createUsername">
                                                            Username
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="createUsername"
                                                            placeholder="name@example.com"
                                                            onChange={
                                                                handleCreateInputChange
                                                            }
                                                            value={
                                                                userCreateData.createUsername
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="createEmail">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="createEmail"
                                                            placeholder="name@example.com"
                                                            onChange={
                                                                handleCreateInputChange
                                                            }
                                                            value={
                                                                userCreateData.createEmail
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="createPassword">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="createPassword"
                                                            onChange={
                                                                handleCreateInputChange
                                                            }
                                                            value={
                                                                userCreateData.createPassword
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">
                                                            Repeat Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="repeatPassword"
                                                            onChange={
                                                                handleCreateInputChange
                                                            }
                                                            value={
                                                                userCreateData.repeatPassword
                                                            }
                                                        />
                                                    </div>
                                                    <Link
                                                        disabled={
                                                            !(
                                                                userCreateData.createEmail &&
                                                                userCreateData.createPassword &&
                                                                userCreateData.repeatPassword
                                                            )
                                                        }
                                                        to="/"
                                                        className="btn btn-primary btn-block"
                                                        onClick={
                                                            handleFormCreate
                                                        }
                                                    >
                                                        Sign In
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

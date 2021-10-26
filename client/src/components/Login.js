import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../utils/mutations";

import useScrollToTop from "../utils/useScrollToTop";
const Login = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    useScrollToTop();

    const [userFormData, setUserFormData] = useState({
        email: "",
        password: "",
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(USER_LOGIN);

    const handleInputChange = (event) => {
        const { type, value } = event.target;
        setUserFormData({ ...userFormData, [type]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: "",
            email: "",
            password: "",
        });
    };
    //style="transition: max-height 300ms ease 0s; max-height: 283.333px;
    const styles = {
        activeCard: {
            transition: "max-height 300ms ease 0s",
            maxHeight: "283.333px",
        },
        inactiveCard: {
            transition: "max-height 300ms ease 0s",
            maxHeight: "0px",
        },
        activeInsideCard: {
            overflow: "hidden",
            transition: "max-height 300ms ease 0s",
            maxHeight: "381.075px",
        },
        //overflow: hidden; transition: max-height 300ms ease 0s; max-height: 0px;
        inactiveInsideCard: {
            overflow: "hidden",
            transition: "max-height 300ms ease 0s",
            maxHeight: "0px",
        },
    };

    useEffect(() => {});

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
                                        className="accordion-control"
                                        data-control
                                    >
                                        <h5>Sign In</h5>
                                    </div>
                                    <div
                                        className="accordion-content"
                                        style={styles.activeCard}
                                        data-content
                                    >
                                        <div
                                            className="accordion-content-wrapper"
                                            style={styles.activeInsideCard}
                                        >
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="em">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="em"
                                                        placeholder="name@example.com"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            userFormData.email
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pw">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="pw"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            userFormData.password
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <Link
                                                    disabled={
                                                        !(
                                                            userFormData.email &&
                                                            userFormData.password
                                                        )
                                                    }
                                                    to="/dashboard"
                                                    className="btn btn-primary btn-block"
                                                    onClick={handleFormSubmit}
                                                >
                                                    Sign In
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" data-accordion>
                                    <div
                                        className="accordion-control"
                                        style={styles.inactiveCard}
                                        data-control
                                    >
                                        <h5>Create Account</h5>
                                    </div>
                                    <div
                                        className="accordion-content create-account-card"
                                        style={styles.inactiveInsideCard}
                                        data-content
                                    >
                                        <div className="accordion-content-wrapper">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput3">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput3"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput4">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleFormControlInput4"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput5">
                                                        Repeat Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleFormControlInput5"
                                                    />
                                                </div>
                                                <a
                                                    href="/"
                                                    className="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </a>
                                            </form>
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

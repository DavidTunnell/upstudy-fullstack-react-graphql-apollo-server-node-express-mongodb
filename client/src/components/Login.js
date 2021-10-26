import React, { useState } from "react";
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
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

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
                                        data-content
                                    >
                                        <div className="accordion-content-wrapper">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput2">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleFormControlInput2"
                                                    />
                                                </div>
                                                <Link
                                                    to="/dashboard"
                                                    className="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="accordion" data-accordion>
                                    <div
                                        className="accordion-control"
                                        data-control
                                    >
                                        <h5>Create Account</h5>
                                    </div>
                                    <div
                                        className="accordion-content"
                                        data-content
                                    >
                                        <div className="accordion-content-wrapper">
                                            <p>
                                                Create account is currently
                                                disabled for everyone except
                                                David.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

import React, { useState, useEffect, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { USER_LOGIN, ADD_USER } from "../utils/mutations";
import SimpleReactValidator from "simple-react-validator";
import Modal from "./Modal";

const ForgotPassword = () => {
    const bgImage = "/assets/images/login-bg.jpg";
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
                                    <div className="signin-card">
                                        <div
                                            className="accordion-control signin-card"
                                            data-control
                                        >
                                            <h5>Forgot Password</h5>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            data-content
                                        >
                                            <div className="accordion-content-wrapper">
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
                                                            required
                                                        />
                                                    </div>
                                                    <Link
                                                        to="/dashboard"
                                                        className="btn btn-primary btn-block"
                                                    >
                                                        Get Email Link
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
            {/* <Modal
                show={showAlert}
                title="Error"
                content={errorMessage}
                closeModal={handleModalClose}
            /> */}
        </>
    );
};

export default ForgotPassword;

import React, { useState, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { USER_FORGOT_PASSWORD } from "../utils/mutations";
import SimpleReactValidator from "simple-react-validator";
import Modal from "./Modal";

const ForgotPassword = () => {
    const bgImage = "/assets/images/login-bg.jpg";
    const [emailInput, setEmailInput] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [validatorEmail] = useState(new SimpleReactValidator());
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const [forgotPassword] = useMutation(USER_FORGOT_PASSWORD);
    const handleEmailInputChange = (event) => {
        const { value } = event.target;
        setEmailInput(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validatorEmail.allValid()) {
            try {
                const { data } = await forgotPassword({
                    variables: { email: emailInput },
                });
                console.log(data);
                if (data) {
                    setModalMessage(
                        "A new password has been sent to the email address if it exists. Check your email."
                    );
                    setModalTitle("Success");
                    setShowAlert(true);
                } else {
                    setModalTitle("Fail");
                    setModalMessage("There was an error.");
                    setShowAlert(true);
                }
            } catch (err) {
                setModalTitle("Fail");
                setModalMessage(err.message);
                setShowAlert(true);
            }
        } else {
            validatorEmail.showMessages();
            forceUpdate();
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
                                className="accordion-group accordion-group-portal forgot-portal"
                                data-accordion-group
                            >
                                <div className="accordion open" data-accordion>
                                    <div className="signin-card">
                                        <div className="p-3" data-control>
                                            <h5
                                                style={{
                                                    fontSize: "1.25rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Forgot Password
                                            </h5>
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
                                                            onChange={
                                                                handleEmailInputChange
                                                            }
                                                            value={emailInput}
                                                            required
                                                        />
                                                        {validatorEmail.message(
                                                            "email",
                                                            emailInput,
                                                            "required|email"
                                                        )}
                                                    </div>
                                                    <button
                                                        className="btn btn-primary btn-block"
                                                        onClick={handleSubmit}
                                                    >
                                                        Get Email Link
                                                    </button>
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
            <Modal
                show={showAlert}
                title={modalTitle}
                content={modalMessage}
                closeModal={() => setShowAlert(false)}
            />
        </>
    );
};

export default ForgotPassword;

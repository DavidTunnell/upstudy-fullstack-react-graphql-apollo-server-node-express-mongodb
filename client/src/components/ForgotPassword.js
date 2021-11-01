import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const ForgotPassword = () => {
    const bgImage = "/assets/images/login-bg.jpg";
    const [emailInput, setEmailInput] = useState("");
    const [validatorEmail] = useState(new SimpleReactValidator());
    const handleEmailInputChange = (event) => {
        const { value } = event.target;
        setEmailInput(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(emailInput);
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

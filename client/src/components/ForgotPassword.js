import React, { useState, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { USER_FORGOT_PASSWORD } from "../utils/mutations";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { modalActions } from "../redux/actions/";

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const bgImage = "/assets/images/login-bg.jpg";

    const [emailInput, setEmailInput] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
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
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Success",
                            "A new password has been sent to the email address if it exists. Check your email."
                        )
                    );
                    setIsDisabled(true);
                } else {
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Fail",
                            "There was an error."
                        )
                    );
                }
            } catch (err) {
                dispatch(modalActions.updateAndShowModal("Hmm", err.message));
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
                                                        disabled={isDisabled}
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
        </>
    );
};

export default ForgotPassword;

import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import Auth from "../utils/auth";
import { USER_UPDATE_PASSWORD } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import SimpleReactValidator from "simple-react-validator";
import Modal from "./Modal";

const Dashboard = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    const cardBgColor = "#f5f5f5";

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [isVerified, setIsVerified] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repeatNewPassword, setRepeatNewPassword] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const [updatePassword] = useMutation(USER_UPDATE_PASSWORD);

    const [validatorPassword] = useState(new SimpleReactValidator());
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        const userLoggedIn = Auth.getProfile().data;
        setUsername(userLoggedIn.username);
        setEmail(userLoggedIn.email);
        setIsVerified(userLoggedIn.isVerified);
    }, []);

    const handleOldPasswordInputChange = (event) => {
        const { value } = event.target;
        setOldPassword(value);
    };
    const handleNewPasswordInputChange = (event) => {
        const { value } = event.target;
        setNewPassword(value);
    };
    const handleRepeatNewPasswordInputChange = (event) => {
        const { value } = event.target;
        setRepeatNewPassword(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(oldPassword, newPassword, repeatNewPassword);
        console.log(validatorPassword.allValid());
        if (validatorPassword.allValid()) {
            try {
                const { data } = await updatePassword({
                    variables: {
                        email,
                        oldPassword,
                        newPassword,
                    },
                });
                if (data) {
                    //tell modal
                    setModalTitle("Success");
                    setModalMessage(
                        "Your password has been updated successfully."
                    );
                } else {
                    setModalTitle("Error");
                    setModalMessage(
                        "There was a problem updating your password."
                    );
                }
                setIsDisabled(true);
                setShowAlert(true);
            } catch (err) {
                setModalTitle("Error");
                setModalMessage(err.message);
                setShowAlert(true);
            }
        } else {
            validatorPassword.showMessages();
            forceUpdate();
        }
    };

    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay image-blur "
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="container mt-10 mb-3">
                    <div className="row justify-content-center align-items-center">
                        <div
                            className="w-100 p-3 card"
                            style={{ backgroundColor: cardBgColor }}
                        >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col col-md-10 col-lg-8">
                                        <div className="nav nav-tabs mb-1">
                                            <Link
                                                className="nav-item nav-link active"
                                                data-toggle="tab"
                                                to="/dashboard"
                                            >
                                                Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        role="tabpanel"
                                    >
                                        <div className="row justify-content-center pb-10 mb-10">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row">
                                                    <div className="col ">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            General Information
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="firstName">
                                                                            Username
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="username"
                                                                            aria-describedby="username"
                                                                            placeholder={
                                                                                username
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="secondName">
                                                                            Email
                                                                            Address
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="email"
                                                                            aria-describedby="email"
                                                                            placeholder={
                                                                                email
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 mb-3">
                                                                <div className="col">
                                                                    <div class="custom-control custom-checkbox ml-1">
                                                                        <input
                                                                            type="checkbox"
                                                                            class="custom-control-input"
                                                                            id="customCheckDisabled"
                                                                            checked={
                                                                                isVerified
                                                                            }
                                                                            disabled
                                                                        />
                                                                        <label
                                                                            class="custom-control-label is-verified-label"
                                                                            for="customCheckDisabled"
                                                                        >
                                                                            Is
                                                                            Verified
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr class="mt-2 mb-2" />
                                                            <div className="form-row">
                                                                <div className="col-6">
                                                                    <h5 className="mb-2 fs-20 font-weight-normal">
                                                                        Update
                                                                        Password
                                                                    </h5>
                                                                    <div className="form-group">
                                                                        <label htmlFor="userMail">
                                                                            Existing
                                                                            Password
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="********"
                                                                            onChange={
                                                                                handleOldPasswordInputChange
                                                                            }
                                                                            value={
                                                                                oldPassword
                                                                            }
                                                                            disabled={
                                                                                isDisabled
                                                                            }
                                                                            required
                                                                        />
                                                                        {validatorPassword.message(
                                                                            "password",
                                                                            oldPassword,
                                                                            "required|min:5"
                                                                        )}
                                                                        <label htmlFor="userMail">
                                                                            New
                                                                            Password
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="********"
                                                                            onChange={
                                                                                handleNewPasswordInputChange
                                                                            }
                                                                            value={
                                                                                newPassword
                                                                            }
                                                                            disabled={
                                                                                isDisabled
                                                                            }
                                                                            required
                                                                        />
                                                                        {validatorPassword.message(
                                                                            "password",
                                                                            newPassword,
                                                                            `required|in:${repeatNewPassword}|min:5`,
                                                                            {
                                                                                messages:
                                                                                    {
                                                                                        in: "Passwords need to match.",
                                                                                    },
                                                                            }
                                                                        )}
                                                                        <label htmlFor="userMail">
                                                                            Repeat
                                                                            Password
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="********"
                                                                            onChange={
                                                                                handleRepeatNewPasswordInputChange
                                                                            }
                                                                            value={
                                                                                repeatNewPassword
                                                                            }
                                                                            disabled={
                                                                                isDisabled
                                                                            }
                                                                            required
                                                                        />
                                                                        {validatorPassword.message(
                                                                            "password",
                                                                            repeatNewPassword,
                                                                            `required|in:${newPassword}|min:5`,
                                                                            {
                                                                                messages:
                                                                                    {
                                                                                        in: "Passwords need to match.",
                                                                                    },
                                                                            }
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 align-items-center">
                                                                <div className="col-3">
                                                                    <button
                                                                        className="btn btn-secondary"
                                                                        onClick={
                                                                            handleSubmit
                                                                        }
                                                                        disabled={
                                                                            isDisabled
                                                                        }
                                                                    >
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                </div>
                                                            </div>
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

export default Dashboard;

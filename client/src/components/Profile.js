import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import Auth from "../utils/auth";
import { USER_UPDATE_PASSWORD } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../redux/actions";

const Dashboard = () => {
    //to save and get data to redux store
    const dispatch = useDispatch();
    const user = useSelector((state) => state.loggedInUser);

    //local styling
    const bgColor = "#3c66ff";
    const cardBgColor = "#f5f5f5";

    //state
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [validatorPassword] = useState(new SimpleReactValidator());
    // eslint-disable-next-line
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    //graphql mutation to update password
    const [updatePassword] = useMutation(USER_UPDATE_PASSWORD);

    //use react router history
    const history = useHistory();

    //if the user isn't logged in send them to login screen
    useEffect(() => {
        if (!Auth.loggedIn()) {
            history.push("/login");
        }
    });

    //update state for field input
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

    //on update password submit
    const handleSubmit = async (event) => {
        //prevent server reload of page on click
        event.preventDefault();
        //check that client field validation is good
        if (validatorPassword.allValid()) {
            try {
                //update password via graphql
                const { data } = await updatePassword({
                    variables: {
                        email: user.email,
                        oldPassword,
                        newPassword,
                    },
                });
                //give user feedback of action
                if (data) {
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Success",
                            "Your password has been updated successfully."
                        )
                    );
                } else {
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Error",
                            "There was a problem updating your password."
                        )
                    );
                }
                //disable update button to prevent spamming
                setIsDisabled(true);
            } catch (err) {
                dispatch(modalActions.updateAndShowModal("Error", err.message));
            }
        } else {
            //show issues with validation
            validatorPassword.showMessages();
            //force update state to show validation messages to user
            forceUpdate();
        }
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <h5 className="mb-2 fs-20 font-weight-normal">
                        General Information
                    </h5>
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="firstName">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        aria-describedby="username"
                                        placeholder={user.username}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="secondName">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="email"
                                        placeholder={user.email}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-row mt-1 mb-3">
                            <div className="col">
                                <div className="custom-control custom-checkbox ml-1">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheckDisabled"
                                        checked={user.isVerified}
                                        disabled
                                    />
                                    <label
                                        className="custom-control-label is-verified-label"
                                        htmlFor="customCheckDisabled"
                                    >
                                        Is Verified
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-2 mb-2" />
                        <div className="form-row">
                            <div className="col-6">
                                <h5 className="mb-2 fs-20 font-weight-normal">
                                    Update Password
                                </h5>
                                <div className="form-group">
                                    <label htmlFor="userMail">
                                        Existing Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        aria-describedby="userMail"
                                        placeholder="********"
                                        onChange={handleOldPasswordInputChange}
                                        value={oldPassword}
                                        disabled={isDisabled}
                                        required
                                    />
                                    {validatorPassword.message(
                                        "password",
                                        oldPassword,
                                        "required|min:5"
                                    )}
                                    <label htmlFor="userMail">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        aria-describedby="userMail"
                                        placeholder="********"
                                        onChange={handleNewPasswordInputChange}
                                        value={newPassword}
                                        disabled={isDisabled}
                                        required
                                    />
                                    {validatorPassword.message(
                                        "password",
                                        newPassword,
                                        `required|in:${repeatNewPassword}|min:5`,
                                        {
                                            messages: {
                                                in: "Passwords need to match.",
                                            },
                                        }
                                    )}
                                    <label htmlFor="userMail">
                                        Repeat Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        aria-describedby="userMail"
                                        placeholder="********"
                                        onChange={
                                            handleRepeatNewPasswordInputChange
                                        }
                                        value={repeatNewPassword}
                                        disabled={isDisabled}
                                        required
                                    />
                                    {validatorPassword.message(
                                        "password",
                                        repeatNewPassword,
                                        `required|in:${newPassword}|min:5`,
                                        {
                                            messages: {
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
                                    onClick={handleSubmit}
                                    disabled={isDisabled}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

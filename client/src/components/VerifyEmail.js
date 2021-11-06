import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMAIL_VERIFICATION_TOKEN, VERIFY_EMAIL } from "../utils/mutations";
import Auth from "../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/actions/";
const VerifyEmail = () => {
    const user = useSelector((state) => state.loggedInUser);
    const dispatch = useDispatch();

    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/verify-bg.jpg)",
        },
    };
    const [addEmailVerificationToken] = useMutation(
        ADD_EMAIL_VERIFICATION_TOKEN
    );
    const [verifyEmail] = useMutation(VERIFY_EMAIL);
    const history = useHistory();
    const search = window.location.search;
    const params = new URLSearchParams(search);

    let createdEmail = params.get("email");
    let createdToken = params.get("token");
    let userId = params.get("id");
    let username = params.get("username");

    const generateVerificationEmail = async (userId, username, email) => {
        await addEmailVerificationToken({
            variables: {
                userId,
                username,
                email,
            },
        });
    };
    const verifyUserEmail = async (email, token) => {
        return await verifyEmail({
            variables: {
                email,
                token,
            },
        });
    };
    const handleResendVerificationEmail = async (event) => {
        event.preventDefault();
        console.log("handleResendVerificationEmail");
        await addEmailVerificationToken({
            variables: {
                userId,
                username,
                email: createdEmail,
            },
        });
        setIsDisabledButton(true);
    };
    useEffect(() => {
        async function processUrlParams() {
            if (username && Auth.loggedIn()) {
                try {
                    generateVerificationEmail(userId, username, createdEmail);
                } catch (error) {
                    history.push("/error", { data: error });
                }
            } else if (createdToken) {
                try {
                    //graphql call
                    const userData = await verifyUserEmail(
                        createdEmail,
                        createdToken
                    );
                    const user = userData.data.verifyEmail.user;
                    dispatch(
                        userActions.loginRedux(
                            user._id,
                            user.username,
                            user.email,
                            user.isVerified
                        )
                    );

                    //THIS needs to be replaced with redux global state, and then whatever uses this state needs to be updated
                    //the if else statement here is based on the query string being passed in
                    //update this with upating global state to true for user
                } catch (error) {
                    history.push("/error", { data: error });
                }
            } else {
                history.push("/404");
            }
        }
        processUrlParams();
    }, []);

    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay image-blur"
                    style={styles.notFoundStyle}
                ></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center vh-100">
                        {!user.isVerified ? (
                            <div className="col-md-6 col-lg-4 text-white text-center">
                                <h1>Check your email</h1>
                                <p>
                                    Click the link to verify your email address.
                                    You can continue to use the site but will be
                                    reminded to verify your email address until
                                    you do so.
                                </p>
                                <p>
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-white mr-1 mb-1"
                                            type="button"
                                            onClick={
                                                handleResendVerificationEmail
                                            }
                                            disabled={isDisabledButton}
                                        >
                                            Resend Email
                                        </button>

                                        <Link to="/">
                                            <button
                                                className="btn btn-white mr-1 mb-1"
                                                type="button"
                                            >
                                                Go Home
                                            </button>
                                        </Link>
                                    </div>
                                </p>
                            </div>
                        ) : (
                            <div className="col-md-6 col-lg-4 text-white text-center">
                                <h1>Your email address has been verified.</h1>
                                <p>Thanks, let's do some learning!</p>
                                <p>
                                    <div className="mt-3">
                                        <Link to="/">
                                            <button
                                                className="btn btn-white mr-1 mb-1"
                                                type="button"
                                            >
                                                Go Home
                                            </button>
                                        </Link>
                                    </div>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyEmail;

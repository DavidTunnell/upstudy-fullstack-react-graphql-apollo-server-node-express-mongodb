import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMAIL_VERIFICATION_TOKEN, VERIFY_EMAIL } from "../utils/mutations";
const VerifyEmail = () => {
    const [hasBeenVerified, setHasBeenVerified] = useState(false);
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
        await verifyEmail({
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
        if (username) {
            try {
                generateVerificationEmail(userId, username, createdEmail);
                setHasBeenVerified(false);
            } catch (error) {
                history.push("/error", { data: error });
            }
        } else if (createdToken) {
            try {
                verifyUserEmail(createdEmail, createdToken);
                setHasBeenVerified(true);
            } catch (error) {
                history.push("/error", { data: error });
            }
        } else {
            history.push("/404");
        }
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
                        {!hasBeenVerified ? (
                            <div className="col-md-6 col-lg-4 text-white text-center">
                                <h1>Check your email</h1>
                                <p>
                                    Click the link to verify your email address.
                                    You can continue to use the site but will be
                                    prompted to verify your email address each
                                    time you sign in.
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

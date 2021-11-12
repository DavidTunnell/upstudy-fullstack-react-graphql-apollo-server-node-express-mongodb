import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMAIL_VERIFICATION_TOKEN, VERIFY_EMAIL } from "../utils/mutations";
import Auth from "../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/actions/";
const VerifyEmail = () => {
    //to save and get data to redux store
    const user = useSelector((state) => state.loggedInUser);
    const dispatch = useDispatch();
    //local styling
    const styles = {
        notFoundStyle: {
            backgroundColor: "#3c66ff",
        },
    };
    //state
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    //graphql mutations to save and send a token to user and to verify with that token
    const [addEmailVerificationToken] = useMutation(
        ADD_EMAIL_VERIFICATION_TOKEN
    );
    const [verifyEmail] = useMutation(VERIFY_EMAIL);

    //use react router history
    const history = useHistory();
    //get url query string parameters
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let createdEmail = params.get("email");
    let createdToken = params.get("token");
    let userId = params.get("id");
    let username = params.get("username");
    //wrapped mutation to create and generate token for email validation
    const generateVerificationEmail = async (userId, username, email) => {
        await addEmailVerificationToken({
            variables: {
                userId,
                username,
                email,
            },
        });
    };
    //wrapped mutation to save that an email was verified
    const verifyUserEmail = async (email, token) => {
        return await verifyEmail({
            variables: {
                email,
                token,
            },
        });
    };
    //create a new token and resent to user via email
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
    //on  1st render run the following
    useEffect(() => {
        //internal function so it can be async
        async function processUrlParams() {
            //check if there is a username url query parameter and if the user is logged in
            if (username && Auth.loggedIn()) {
                //if so send them a verification email
                try {
                    await generateVerificationEmail(
                        userId,
                        username,
                        createdEmail
                    );
                } catch (error) {
                    history.push("/error", { data: error });
                }
            } else if (createdToken) {
                //else if the token is in the url param
                try {
                    //graphql call to verify the email address associated with the token
                    const userData = await verifyUserEmail(
                        createdEmail,
                        createdToken
                    );
                    //get data from the verification mutation return and login with it
                    const user = userData.data.verifyEmail.user;
                    dispatch(
                        userActions.loginRedux(
                            user._id,
                            user.username,
                            user.email,
                            user.isVerified
                        )
                    );
                } catch (error) {
                    history.push("/error", { data: error });
                }
            } else {
                //if the query string is invalid send to 404 page
                history.push("/404");
            }
        }
        processUrlParams();
        // eslint-disable-next-line
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
                                <div className="mt-3">
                                    <button
                                        className="btn btn-white mr-1 mb-1"
                                        type="button"
                                        onClick={handleResendVerificationEmail}
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
                            </div>
                        ) : (
                            <div className="col-md-6 col-lg-4 text-white text-center">
                                <h1>Your email address has been verified.</h1>
                                <p>Thanks, let's do some learning!</p>
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyEmail;

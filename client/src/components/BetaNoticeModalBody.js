import React, { useState, useEffect, useReducer } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useMutation } from "@apollo/client";
import { ADD_BETA_FEEDBACK, GET_S3_URL } from "../utils/mutations";
import { GET_BETA_FEEDBACK } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../redux/actions";
import Auth from "../utils/auth";

const BetaNoticeModalBody = (params) => {
    //local component state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [imageFile, setImageFile] = useState(null);
    //validator for file size used for image upload field
    const [validatorFeedback] = useState(
        new SimpleReactValidator({
            validators: {
                maxFileSize: {
                    // name the rule
                    message: "The max file size is 5MB.",
                    rule: (val, parameters, validator) => {
                        if (val) {
                            const fileSize = val.size / 1024 / 1024; // in MiB
                            if (fileSize > 5) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                    },
                    required: false, // optional
                },
            },
        })
    );
    // eslint-disable-next-line
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isMuted, setIsMuted] = useState("");
    //this mutation also refetches the beta feedback so things stay current
    const [addBetaFeedback] = useMutation(ADD_BETA_FEEDBACK, {
        refetchQueries: [{ query: GET_BETA_FEEDBACK }],
    });
    //uploads and gets url for s3 image storage
    const [getS3Url] = useMutation(GET_S3_URL);
    //to save data to redux store
    const dispatch = useDispatch();
    //get user from redux store
    const user = useSelector((state) => state.loggedInUser);
    //params from parent component
    const handleModalExit = params.handleModalExit;
    useEffect(() => {
        //populate and disable fields for user and email if a user is logged in
        if (user.email) {
            setIsDisabled(true);
            setEmail(user.email);
            setUsername(user.username);
            setIsMuted("text-muted");
        } else {
            setIsDisabled(false);
            setEmail("");
            setUsername("");
            setIsMuted("");
        }
    }, [user]);

    const onSubmit = async (event) => {
        //prevent server reload of page on click
        event.preventDefault();
        //get the category the user has selected
        const selectedCategory = document
            .querySelector(".feedback-type")
            .querySelector(".selectric")
            .querySelector(".label").innerHTML;
        //input validation check
        if (validatorFeedback.allValid()) {
            //https://www.youtube.com/watch?v=yGYeYJpRWPM&t=137s
            try {
                let imageUrl = "";
                //if the user wants to upload an image there this needs to run
                if (imageFile) {
                    //get secure url from our server
                    const urlReturnObject = await getS3Url({
                        variables: {
                            isLoggedIn: Auth.loggedIn(),
                        },
                    });
                    const urlObject = urlReturnObject.data;
                    const url = urlObject.getS3Url;

                    //post the image directly to the s3 bucket
                    await fetch(url, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        body: imageFile,
                    });
                    //get back image url from s3
                    imageUrl = url.split("?")[0];
                }
                //write to db via graphql mutation
                try {
                    await addBetaFeedback({
                        variables: {
                            username,
                            email,
                            category: selectedCategory,
                            message,
                            image: imageUrl,
                            archived: false,
                        },
                    });
                    //let user know what happened

                    setTimeout(function () {
                        dispatch(
                            modalActions.updateAndShowModal(
                                "Success",
                                "We received your feedback. Thank you for being a part of Upstudy.io!"
                            )
                        );
                    }, 250);
                } catch (err) {
                    setTimeout(function () {
                        dispatch(
                            modalActions.updateAndShowModal(
                                "Error",
                                "There was an error either with graphQL, MongoDB, or Amazon s3. Please try again later."
                            )
                        );
                    }, 250);
                }
            } catch (error) {
                console.log(error);
                setTimeout(function () {
                    dispatch(
                        modalActions.updateAndShowModal("Error", error.message)
                    );
                }, 250);
            }
            //if the user isn't logged in clear these fields also
            if (!Auth.loggedIn()) {
                setUsername("");
                setEmail("");
            }
            //clear form
            setMessage("");
            setImageFile(null);
            const fileInput = document.getElementsByClassName(
                "feedback-file-input"
            )[0];
            fileInput.value = null;
            handleModalExit();
        } else {
            validatorFeedback.showMessages();
            //force update state to show validation messages to user
            forceUpdate();
        }
    };

    const handleImageSelection = async (event) => {
        //put image file in state
        const input = event.target;
        setImageFile(input.files[0]);
    };
    return (
        <>
            <div className="modal-body text-left mt-n1">
                <div className="container">
                    <div className="text-center">
                        <h2>Write Us</h2>
                        <p className="lead">
                            Did you find a bug? Want to make a suggestion? If
                            you have any feedback please let us know.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="mt-2">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">
                                            Username
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    @
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className={`form-control ${isMuted}`}
                                                onChange={(event) => {
                                                    setUsername(
                                                        event.target.value
                                                    );
                                                }}
                                                value={username}
                                                placeholder="Username"
                                                disabled={isDisabled}
                                            />
                                        </div>
                                        {validatorFeedback.message(
                                            "username",
                                            username,
                                            "required|min:3"
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control ${isMuted}`}
                                            placeholder="user@upstudy.io"
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                            value={email}
                                            disabled={isDisabled}
                                        />
                                        {validatorFeedback.message(
                                            "email",
                                            email,
                                            "required|email"
                                        )}
                                    </div>
                                </div>

                                <div className="mb-3 mt-n5">
                                    <label htmlFor="email">Category</label>
                                    <div className="form-group feedback-type">
                                        <select className="form-control">
                                            <option>Suggestion</option>
                                            <option>Bug</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Message</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows="6"
                                        style={{
                                            height: "100%",
                                        }}
                                        placeholder="I noticed that..."
                                        onChange={(event) => {
                                            setMessage(event.target.value);
                                        }}
                                        value={message}
                                    />
                                    {validatorFeedback.message(
                                        "message",
                                        message,
                                        "required"
                                    )}
                                </div>
                                <hr className="mb-2" />
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="image">
                                            Image Upload (Optional)
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control feedback-file-input"
                                            name="image"
                                            accept="image/*"
                                            onChange={(event) => {
                                                handleImageSelection(event);
                                            }}
                                        />
                                        {validatorFeedback.message(
                                            "maxFileSize",
                                            imageFile,
                                            "maxFileSize"
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary w-100"
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BetaNoticeModalBody;

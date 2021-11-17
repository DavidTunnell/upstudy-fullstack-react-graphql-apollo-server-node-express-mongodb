import React, { useState, useEffect, useReducer } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useMutation } from "@apollo/client";
import { ADD_BETA_FEEDBACK, GET_S3_URL } from "../utils/mutations";
import { GET_BETA_FEEDBACK } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../redux/actions/";
import Auth from "../utils/auth";
import LargeGenericModal from "./LargeGenericModal";

const BetaNotice = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [validatorFeedback] = useState(
        new SimpleReactValidator({
            validators: {
                maxFileSize: {
                    // name the rule
                    message: "The max file size is 5MB.",
                    rule: (val, params, validator) => {
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
    const [showModal, setShowModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isMuted, setIsMuted] = useState("");
    const [addBetaFeedback] = useMutation(ADD_BETA_FEEDBACK, {
        refetchQueries: [{ query: GET_BETA_FEEDBACK }],
    });
    const [getS3Url] = useMutation(GET_S3_URL);
    //to save data to redux store
    const dispatch = useDispatch();
    const user = useSelector((state) => state.loggedInUser);

    useEffect(() => {
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
        const selectedCategory = document
            .querySelector(".feedback-type")
            .querySelector(".selectric")
            .querySelector(".label").innerHTML;
        setCategory(selectedCategory);
        const feedbackModal = document.querySelector("#feedback-modal");
        const feedbackModalBackdrop = document.querySelector(".modal-backdrop");
        const feedbackModalOpen = document.querySelector(".modal-open");
        const body = document.querySelector("body");
        if (validatorFeedback.allValid()) {
            //https://www.youtube.com/watch?v=yGYeYJpRWPM&t=137s
            try {
                let imageUrl = "";
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
                //write to db
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
                    //close
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Success",
                            "We received your feedback. Thank you for being a part of Upstudy.io!"
                        )
                    );
                } catch (err) {
                    //close
                    //then show other modal
                    dispatch(
                        modalActions.updateAndShowModal(
                            "Error",
                            "There was an error either with graphQL, MongoDB, or Amazon s3. Please try again later."
                        )
                    );
                }
            } catch (error) {
                console.log(error);
                dispatch(
                    modalActions.updateAndShowModal("Error", error.message)
                );
            }
            //this is wrong - need to move into state!!!!!!! ****
            feedbackModal.classList.remove("show");
            feedbackModal.style.cssText += "display: none;";
            feedbackModalBackdrop.classList.remove("modal-backdrop");
            feedbackModalOpen.classList.remove("modal-open");
            body.style.cssText += "padding-right: 0px;";
            ///////////////////////////////
            if (!Auth.loggedIn()) {
                setUsername("");
                setEmail("");
            }
            //update category to suggestion?
            setMessage("");
            setImage("");
            setImageFile(null);
        } else {
            validatorFeedback.showMessages();
            //force update state to show validation messages to user
            forceUpdate();
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = () => {
        setShowModal(true);
    };

    const handleImageSelection = async (event) => {
        const input = event.target;
        setImageFile(input.files[0]);
        // setImage("what");
    };
    return (
        <>
            <section className="bg-light p-6">
                <div className="container ">
                    <div className="boxed bg-primary p-5 text-white">
                        <div className="row justify-content-between align-items-center text-center text-md-left">
                            <div className="col-md-3">
                                <h3>We're in Alpha.</h3>
                            </div>
                            <div className="col-md-6 mt-1 mt-md-0">
                                <p>
                                    Did you find a bug? Want to make a
                                    suggestion? If you have any feedback please
                                    let us know.
                                </p>
                            </div>
                            <div className="col-md-3 mt-1 mt-md-0 text-lg-right">
                                <button
                                    type="button"
                                    className="btn btn-white btn-rounded px-5"
                                    data-toggle="modal"
                                    data-target="#feedback-modal"
                                    onClick={openModal}
                                >
                                    Write Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LargeGenericModal
                closeFunction={closeModal}
                openFunction={openModal}
                showModal={showModal}
            />
            {/* <div
                className="modal fade"
                id="feedback-modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-light">
                        <div className="justify-content-end">
                            <button
                                type="button"
                                className="close m-1"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-left mt-n1">
                            <div className="container">
                                <div className="text-center">
                                    <h2>Write Us</h2>
                                    <p className="lead">
                                        Did you find a bug? Want to make a
                                        suggestion? If you have any feedback
                                        please let us know.
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
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setUsername(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                            value={username}
                                                            placeholder="Username"
                                                            disabled={
                                                                isDisabled
                                                            }
                                                        />
                                                    </div>
                                                    {validatorFeedback.message(
                                                        "username",
                                                        username,
                                                        "required|min:3"
                                                    )}
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="lastName">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className={`form-control ${isMuted}`}
                                                        placeholder="user@upstudy.io"
                                                        onChange={(event) => {
                                                            setEmail(
                                                                event.target
                                                                    .value
                                                            );
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
                                                <label htmlFor="email">
                                                    Category
                                                </label>
                                                <div className="form-group feedback-type">
                                                    <select className="form-control">
                                                        <option>
                                                            Suggestion
                                                        </option>
                                                        <option>Bug</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="address">
                                                    Message
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    rows="6"
                                                    style={{
                                                        height: "100%",
                                                    }}
                                                    placeholder="I noticed that..."
                                                    onChange={(event) => {
                                                        setMessage(
                                                            event.target.value
                                                        );
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
                                                        className="form-control"
                                                        name="image"
                                                        accept="image/*"
                                                        onChange={(event) => {
                                                            handleImageSelection(
                                                                event
                                                            );
                                                        }}
                                                        // value={image}
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
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default BetaNotice;

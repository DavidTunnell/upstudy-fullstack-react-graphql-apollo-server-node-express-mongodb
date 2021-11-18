import { useDispatch, useSelector } from "react-redux";
import { useState, useReducer } from "react";
import SimpleReactValidator from "simple-react-validator";
import { modalActions } from "../redux/actions";
import { useMutation } from "@apollo/client";
import {
    GET_S3_URL_AUTHENTICATED,
    UPDATE_PROFILE_PIC,
} from "../utils/mutations";
import Auth from "../utils/auth";
import { userActions } from "../redux/actions/";
const UpdatePicModalBody = (params) => {
    const user = useSelector((state) => state.loggedInUser);
    const handleModalExit = params.handleModalExit;
    const [imageFile, setImageFile] = useState(null);
    const [imageIsSquare, setImageIsSquare] = useState(false);
    const [validatorProfilePic] = useState(
        new SimpleReactValidator({
            validators: {
                maxFileSize: {
                    // name the rule
                    message: "The max file size is 250kb.",
                    rule: (val, params, validator) => {
                        if (val) {
                            const fileSize = val.size / 1024 / 1024; // in MiB
                            if (fileSize > 0.25) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                    },
                    required: true, // optional
                },
                imageSquare: {
                    // name the rule
                    message: "The image must be perfectly square.",
                    rule: async (val, params, validator) => {
                        if (val) {
                            await getImageInfo(val);
                        }
                    },
                    required: true, // optional
                },
            },
        })
    );

    const getImageInfo = async (file) => {
        var height = -1;
        var width = -1;
        const _URL = window.URL || window.webkitURL;
        //Initiate the JavaScript Image object.
        const image = new Image();
        image.src = _URL.createObjectURL(file);
        image.onload = () => {
            height = image.height;
            width = image.width;
        };
        console.log(height);
        console.log(width);
    };

    //try function async await to get loaded

    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const dispatch = useDispatch();
    const [getS3UrlAuthenticated] = useMutation(GET_S3_URL_AUTHENTICATED);
    const [updateProfilePic] = useMutation(
        UPDATE_PROFILE_PIC
        // , {refetchQueries: [{ query: GET_BETA_FEEDBACK }],}
    );
    const onSubmit = async (event) => {
        event.preventDefault();
        if (validatorProfilePic.allValid()) {
            try {
                let imageUrl = "";
                if (imageFile) {
                    //get secure url from our server
                    const urlReturnObject = await getS3UrlAuthenticated({
                        variables: {
                            isLoggedIn: Auth.loggedIn(),
                        },
                    });
                    const urlObject = urlReturnObject.data;
                    const url = urlObject.getS3UrlAuthenticated;
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
                    try {
                        await updateProfilePic({
                            variables: {
                                userId: user.id,
                                profilePic: imageUrl,
                            },
                        });
                        //close
                        dispatch(
                            modalActions.updateAndShowModal(
                                "Success",
                                "Your profile pic has been updated."
                            )
                        );
                        handleModalExit();
                        dispatch(
                            userActions.updateProfilePicRedux(user.id, imageUrl)
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
                }
            } catch (error) {
                console.log(error);
                dispatch(
                    modalActions.updateAndShowModal("Error", error.message)
                );
            }
        } else {
            //show issues with validation
            validatorProfilePic.showMessages();
            //force update state to show validation messages to user
            forceUpdate();
        }
    };

    const handleImageSelection = async (event) => {
        const input = event.target;
        setImageFile(input.files[0]);
    };

    return (
        <>
            <div className="modal-body text-left mt-n1">
                <div className="container">
                    <div>
                        <img
                            className="img-fluid mx-auto d-block large-profile-pic"
                            src={user.profilePic}
                            alt="profile pic"
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="mt-2">
                                <hr className="mb-2" />
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="image">
                                            Image Upload
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            accept="image/*"
                                            onChange={(event) => {
                                                handleImageSelection(event);
                                            }}
                                        />
                                        {validatorProfilePic.message(
                                            "maxFileSize",
                                            imageFile,
                                            "maxFileSize|imageSquare"
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary w-100"
                                        onClick={(event) => {
                                            onSubmit(event);
                                        }}
                                    >
                                        Update
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

export default UpdatePicModalBody;

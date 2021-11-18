import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { modalActions } from "../redux/actions";

const UpdatePicModalBody = (params) => {
    const user = useSelector((state) => state.loggedInUser);
    const [imageFile, setImageFile] = useState(null);
    const [validatorProfilePic] = useState(
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

    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (validatorProfilePic.allValid()) {
            try {
                console.log(imageFile);
            } catch (error) {
                console.log(error);
                dispatch(
                    modalActions.updateAndShowModal("Error", error.message)
                );
            }
        }
        //
    };

    const handleImageSelection = async (event) => {
        console.log("new component");
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
                                            "maxFileSize"
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

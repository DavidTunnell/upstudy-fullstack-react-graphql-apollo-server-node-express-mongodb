import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Profile from "./Profile";
import BetaFeedback from "./BetaFeedback";
import { useState, useEffect, useReducer } from "react";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const user = useSelector((state) => state.loggedInUser);

    const [isAdmin, setIsAdmin] = useState(false);
    const [isMod, setIsMod] = useState(false);
    const [isUser, setIsUser] = useState(false);
    // const [profilePicUrl, setProfilePicUrl] = useState(
    //     "../../assets/images/default-profile-pics/default-profile-pic-3.jpg"
    // );

    const bgColor = "#3c66ff";
    //use react router history
    const history = useHistory();

    //if the user isn't logged in send them to login screen
    useEffect(() => {
        if (!Auth.loggedIn()) {
            history.push("/login");
        }
        if (user.roles.some((e) => e.role === "admin") && Auth.loggedIn()) {
            setIsAdmin(true);
        }
        if (user.roles.some((e) => e.role === "mod") && Auth.loggedIn()) {
            setIsMod(true);
        }
        if (user.roles.some((e) => e.role === "user") && Auth.loggedIn()) {
            setIsUser(true);
        }
    });

    const viewUpdateProfilePic = () => {
        console.log("clicked");
    };

    return (
        <>
            <section
                style={{ backgroundColor: bgColor }}
                className="pb-5 pt-5 viewport"
            >
                <div style={{ backgroundColor: bgColor, height: "5rem" }}></div>
                <div class="d-flex justify-content-center flex-nowrap mb-1 row">
                    <div class="card bg-light col-8">
                        <div class="mt-n3"></div>
                        <div class="mt-n10 mb-6">
                            <div class="card-body p-0 mt-n10">
                                <div class="p-0 mt-n10">
                                    <div class="container mt-n10">
                                        <div class="row justify-content-center align-items-end vh-50 mb-5 mt-n10">
                                            <div class="col-4 col-md-10 col-lg-8 mt-n10">
                                                <div class="row align-items-center">
                                                    <div class="col-4 col-lg-3">
                                                        <img
                                                            class="mr-3 avatar avatar-xl rounded profile-pic"
                                                            src={
                                                                user.profilePic
                                                            }
                                                            alt="Generic placeholder"
                                                            data-toggle="modal"
                                                            data-target="#update-profile-pic-modal"
                                                            onClick={
                                                                viewUpdateProfilePic
                                                            }
                                                        />
                                                        <span
                                                            className="control-color circle-icon bg-primary"
                                                            onClick={
                                                                viewUpdateProfilePic
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faCamera}
                                                                className="text-light"
                                                                size="lg"
                                                                data-toggle="modal"
                                                                data-target="#update-profile-pic-modal"
                                                            />
                                                        </span>
                                                    </div>

                                                    <div class="col">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-8">
                                                                <h2 class="mb-0">
                                                                    <b>
                                                                        {
                                                                            user.username
                                                                        }
                                                                    </b>
                                                                </h2>
                                                                {/* <span class="text-muted">
                                                            Senior Visual
                                                            Designer
                                                        </span> */}
                                                            </div>
                                                            {/* <div class="col-md-4 text-left text-md-right">
                                                        <button
                                                            type="button"
                                                            class="btn btn-rounded btn-ico btn-white"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Add Friend"
                                                        >
                                                            <i class="icon-plus2 fs-20"></i>
                                                        </button>
                                                    </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col col-md-10 col-lg-8">
                                                <div className="nav nav-tabs mb-1">
                                                    {isUser && (
                                                        <a
                                                            className="nav-item nav-link active"
                                                            data-toggle="tab"
                                                            href="#profile"
                                                        >
                                                            Profile
                                                        </a>
                                                    )}
                                                    {isAdmin && (
                                                        <>
                                                            <a
                                                                className="nav-item nav-link"
                                                                data-toggle="tab"
                                                                href="#feedback"
                                                            >
                                                                Feedback
                                                            </a>
                                                            <a
                                                                className="nav-item nav-link"
                                                                data-toggle="tab"
                                                                href="#mod-tools"
                                                            >
                                                                Mod Tools
                                                            </a>
                                                        </>
                                                    )}
                                                    {isMod && (
                                                        <a
                                                            className="nav-item nav-link"
                                                            data-toggle="tab"
                                                            href="#mod-tools"
                                                        >
                                                            Mod Tools
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="container">
                                        <div
                                            className="tab-content"
                                            id="demo-2"
                                        >
                                            <div
                                                className="tab-pane show active"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12 col-lg-12">
                                                        <Profile />
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane"
                                                id="feedback"
                                                role="tabpanel"
                                                aria-labelledby="feedback"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-md-10 col-lg-8">
                                                        <BetaFeedback />
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane"
                                                id="mod-tools"
                                                role="tabpanel"
                                                aria-labelledby="#mod-tools"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-md-10 col-lg-8">
                                                        Mod Tools will go
                                                        here...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Button
                        </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="modal fade"
                id="update-profile-pic-modal"
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
                                <div>
                                    <img
                                        class="img-fluid mx-auto d-block large-profile-pic"
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
                                                        // onChange={(event) => {
                                                        //     handleImageSelection(
                                                        //         event
                                                        //     );
                                                        // }}
                                                        // value={image}
                                                    />
                                                    {/* {validatorFeedback.message(
                                                        "maxFileSize",
                                                        imageFile,
                                                        "maxFileSize"
                                                    )} */}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg btn-primary w-100"
                                                    // onClick={onSubmit}
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </form>
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

export default Dashboard;

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Profile from "./Profile";
import BetaFeedback from "./BetaFeedback";
import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import SimpleReactValidator from "simple-react-validator";
import { modalActions } from "../redux/actions/";
// import { useMutation } from "@apollo/client";
// import { ADD_BETA_FEEDBACK } from "../utils/mutations";
import { useLazyQuery } from "@apollo/client";
import { GET_BETA_FEEDBACK } from "../utils/queries";
import LargeGenericModal from "./LargeGenericModal";
import UpdatePicModalBody from "./UpdatePicModalBody";

const Dashboard = (params) => {
    const bgColor = params.bgColor;
    const user = useSelector((state) => state.loggedInUser);
    const [betaFeedback, setBetaFeedback] = useState(null);
    const [getBetaFeedbackData] = useLazyQuery(GET_BETA_FEEDBACK, {
        onCompleted: (data) => setBetaFeedback(data.betaFeedback),
        fetchPolicy: "network-only",
    });
    const [isAdmin, setIsAdmin] = useState(false);
    const [isMod, setIsMod] = useState(false);
    const [isUser, setIsUser] = useState(false);

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
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = () => {
        setShowModal(true);
    };
    // function closeModal() {
    //     document.getElementById("backdrop").style.display = "none";
    //     document.getElementById("update-profile-pic-modal").style.display =
    //         "none";
    //     document
    //         .getElementById("update-profile-pic-modal")
    //         .classList.remove("show");
    // }

    const dispatch = useDispatch();
    // const [profilePicUrl, setProfilePicUrl] = useState(
    //     "../../assets/images/default-profile-pics/default-profile-pic-3.jpg"
    // );

    //use react router history
    const history = useHistory();

    //if the user isn't logged in send them to login screen
    useEffect(() => {
        if (!Auth.loggedIn()) {
            history.push("/login");
        }
        if (user?.roles.some((e) => e.role === "admin") && Auth.loggedIn()) {
            setIsAdmin(true);
        }
        if (user?.roles.some((e) => e.role === "mod") && Auth.loggedIn()) {
            setIsMod(true);
        }
        if (user?.roles.some((e) => e.role === "user") && Auth.loggedIn()) {
            setIsUser(true);
        }
    });

    return (
        <>
            <section
                style={{ backgroundColor: bgColor }}
                className="pb-5 pt-5 viewport"
            >
                <div style={{ backgroundColor: bgColor, height: "5rem" }}></div>
                <div className="d-flex justify-content-center flex-nowrap mb-1 row">
                    <div className="card bg-light col-8">
                        <div className="mt-n3"></div>
                        <div className="mt-n10 mb-6">
                            <div className="card-body p-0 mt-n10">
                                <div className="p-0 mt-n10">
                                    <div className="container mt-n10">
                                        <div className="row justify-content-center align-items-end vh-50 mb-5 mt-n10">
                                            <div className="col-4 col-md-10 col-lg-8 mt-n10">
                                                <div className="row align-items-center">
                                                    <div className="col-4 col-lg-3">
                                                        <img
                                                            className="mr-3 avatar avatar-xl rounded profile-pic"
                                                            src={
                                                                user.profilePic
                                                            }
                                                            alt="Generic placeholder"
                                                            data-toggle="modal"
                                                            data-target="#update-profile-pic-modal"
                                                            onClick={() =>
                                                                openModal()
                                                            }
                                                        />
                                                        <span
                                                            className="control-color circle-icon bg-primary"
                                                            onClick={() =>
                                                                openModal()
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

                                                    <div className="col">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-8">
                                                                <h2 className="mb-0">
                                                                    <b>
                                                                        {
                                                                            user.username
                                                                        }
                                                                    </b>
                                                                </h2>
                                                                {/* <span className="text-muted">
                                                            Senior Visual
                                                            Designer
                                                        </span> */}
                                                            </div>
                                                            {/* <div className="col-md-4 text-left text-md-right">
                                                        <button
                                                            type="button"
                                                            className="btn btn-rounded btn-ico btn-white"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Add Friend"
                                                        >
                                                            <i className="icon-plus2 fs-20"></i>
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
                                                                onClick={() =>
                                                                    getBetaFeedbackData()
                                                                }
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
                                                        <BetaFeedback
                                                            feedback={
                                                                betaFeedback
                                                            }
                                                        />
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LargeGenericModal
                closeFunction={closeModal}
                openFunction={openModal}
                showModal={showModal}
                bodyComponent={UpdatePicModalBody}
            />
        </>
    );
};

export default Dashboard;

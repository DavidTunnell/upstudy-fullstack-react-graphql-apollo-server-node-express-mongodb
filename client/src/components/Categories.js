import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../utils/queries";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    categoriesActions,
    filteredCategoriesActions,
} from "../redux/actions/";
import ShareModal from "./ShareModal";
import { useMutation } from "@apollo/client";
import { ADD_BOOKMARK } from "../utils/mutations";
import { modalActions } from "../redux/actions/";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Categories = () => {
    //get user from redux state
    const user = useSelector((state) => state.loggedInUser);
    //share modal state
    const [showModal, setShowModal] = useState(false);
    const [sharePath, setSharePath] = useState(null);
    //get filter categories from redux store
    let filteredCategories = useSelector((state) => state.filteredCategories);
    //get user bookmarks from redux
    let userBookmarks = useSelector((state) => state.userBookmarks);
    //get categories from db
    const { loading, data } = useQuery(GET_SUBJECTS);
    const dispatch = useDispatch();
    //use react router history
    const history = useHistory();
    const [addBookmark] = useMutation(ADD_BOOKMARK);

    useEffect(() => {
        //get categories data into redux store
        if (!loading) {
            dispatch(categoriesActions.categories(data));
            dispatch(filteredCategoriesActions.setAllCategories(data));
        }
    }, [data, loading, dispatch]);

    const handleSocialClick = (path) => {
        setShowModal(true);
        setSharePath(path);
    };

    //idea: make a function that checks whether a bookmark exists and returns disabled if so, then use in JSX loop
    const isBookmarked = (categoryId) => {
        let isBookmarked = false;
        let isArchived = false;
        for (let i = 0; i < userBookmarks.length; i++) {
            const element = userBookmarks[i];
            if (categoryId === element.categoryId) {
                isBookmarked = true;
            }
            if (categoryId === element.categoryId && element.archived == true) {
                isArchived = true;
            }
        }
        if (isArchived) {
            return "";
        }
        if (isBookmarked && !isArchived) {
            return "disabled";
        } else {
            return "";
        }
    };

    const handleSaveClick = async (path, categoryId, categoryName) => {
        if (!user.loggedIn) {
            history.push("/signup");
        } else {
            try {
                //create user via graphql mutation
                const response = addBookmark({
                    variables: {
                        userId: user.id,
                        categoryId: categoryId,
                        name: categoryName,
                        type: "category",
                        path: path,
                    },
                });
                toast.promise(response, {
                    pending: "Saving...",
                    success: "Bookmark Saved!",
                    error: "There was an error.",
                });
            } catch (err) {
                //provide user with error message in modal using redux state date
                dispatch(modalActions.updateAndShowModal("Error", err.message));
            }
        }
    };

    return (
        <>
            <section className="p-3">
                <div className="card-columns p-1 subject-card-columns">
                    {filteredCategories.map((subject) => (
                        <Link to={`/${subject.path}`} key={subject._id}>
                            <div
                                className="card text-white text-center category-cards mt-1"
                                key={subject.id}
                                style={{ backgroundColor: subject.bgColor }}
                            >
                                <img
                                    className="card-img-top p-2 subject-image"
                                    src={subject.image}
                                    alt={subject.name}
                                />
                                <div className="card-body mt-0 pt-0">
                                    <h4 className="card-title">
                                        {subject.name}
                                    </h4>
                                    <div className="btn-group">
                                        <Link
                                            to="/"
                                            data-path={subject.path}
                                            onClick={() =>
                                                handleSocialClick(subject.path)
                                            }
                                        >
                                            <label
                                                className="btn btn-secondary subject-button-controls"
                                                style={{
                                                    borderRadius:
                                                        "0.25rem 0rem 0rem 0.25rem",
                                                }}
                                            >
                                                <div>
                                                    <span className="control-color">
                                                        <FontAwesomeIcon
                                                            icon={faShareSquare}
                                                        />
                                                    </span>
                                                    <span className="control-color m-1">
                                                        Share
                                                    </span>
                                                </div>
                                            </label>
                                        </Link>
                                        <Link to="#">
                                            <label
                                                className={`btn btn-secondary subject-button-controls ${isBookmarked(
                                                    subject._id
                                                )}`}
                                                style={{
                                                    borderRadius:
                                                        "0rem 0.25rem 0.25rem 0rem",
                                                }}
                                                onClick={() =>
                                                    handleSaveClick(
                                                        subject.path,
                                                        subject._id,
                                                        subject.name
                                                    )
                                                }
                                            >
                                                <div>
                                                    <span className="control-color">
                                                        <FontAwesomeIcon
                                                            icon={faBookmark}
                                                        />
                                                    </span>
                                                    <span className="control-color m-1">
                                                        Save
                                                    </span>
                                                </div>
                                            </label>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <ShareModal
                showModal={showModal}
                setShowModal={setShowModal}
                sharePath={sharePath}
            />
            <ToastContainer />
            {/* <section className="bg-white p-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h5>What do you want to learn today?</h5>
                        </div>
                    </div>
                    <div className="row bordered separated gutter-0 ">
                        {subjects.map((subject) => (
                            <div className="col-sm-12 col-lg-6 col-lg-3 ">
                                <div className="feature-square">
                                    <Link to="/">
                                        <div>
                                            <i className="svg-icon mb-2">
                                                <span>
                                                    <img
                                                        src={subject.image}
                                                        alt={subject.name}
                                                    />
                                                </span>
                                            </i>
                                            <h4 className="fs-18 font-weight-normal text-dark">
                                                {subject.name}
                                            </h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="col-sm-12 col-lg-6 col-lg-3 ">
                            <div className="feature-square">
                                <Link to="/">
                                    <div>
                                        <i className="svg-icon mb-2">
                                            <span>
                                                <img
                                                    src="./assets/images/subjects/dark/suggest-new-subject.svg"
                                                    alt="t"
                                                />
                                            </span>
                                        </i>
                                        <h4 className="fs-18 font-weight-normal text-dark">
                                            Suggest a New Subject
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Categories;

import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../utils/queries";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    categoriesActions,
    filteredCategoriesActions,
} from "../redux/actions/";

// import { faBookmark } from "@fortawesome/free-regular-svg-icons";
const Categories = () => {
    let filteredCategories = useSelector((state) => state.filteredCategories);
    const { loading, data } = useQuery(GET_SUBJECTS);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!loading) {
            dispatch(categoriesActions.categories(data));
            dispatch(filteredCategoriesActions.setAllCategories(data));
        }
    }, [data]);

    // const currentCategories = () => {
    //     if (filteredCategories.length === 0) {
    //         return categories;
    //     } else {
    //         return filteredCategories;
    //     }
    // };

    return (
        <>
            <section>
                <div className="card-columns p-1 subject-card-columns">
                    {filteredCategories.map((subject) => (
                        <div
                            className="card text-white text-center category-cards"
                            key={subject.id}
                            style={{ backgroundColor: subject.bgColor }}
                        >
                            <img
                                className="card-img-top p-2 subject-image"
                                src={subject.image}
                                alt={subject.name}
                            />
                            <div className="card-body mt-0 pt-0">
                                <h4 className="card-title">{subject.name}</h4>
                                <div className="btn-group">
                                    <label className="btn btn-secondary subject-button-controls">
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
                                    <label className="btn btn-secondary subject-button-controls">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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

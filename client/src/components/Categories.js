import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../utils/queries";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareSquare } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    const { loading, data } = useQuery(GET_SUBJECTS);
    const subjects = data?.subjects || [];
    console.log(subjects);
    return (
        <>
            <section>
                <div class="card-columns p-1 subject-card-columns">
                    {subjects.map((subject) => (
                        <div
                            class="card text-white text-center"
                            key={subject.id}
                            style={{ backgroundColor: subject.bgColor }}
                        >
                            <img
                                class="card-img-top p-2 subject-image"
                                src={subject.image}
                                alt={subject.name}
                            />
                            <div class="card-body mt-0 pt-0">
                                <h3 class="card-title">{subject.name}</h3>
                                <div class="btn-group">
                                    <label class="btn btn-secondary subject-button-controls">
                                        <div>
                                            <span class="control-color">
                                                <FontAwesomeIcon
                                                    icon={faShareSquare}
                                                />
                                            </span>
                                            <span class="control-color m-1">
                                                Share
                                            </span>
                                        </div>
                                    </label>
                                    <label class="btn btn-secondary subject-button-controls">
                                        <div>
                                            <span class="control-color">
                                                <FontAwesomeIcon
                                                    icon={faBookmark}
                                                />
                                            </span>
                                            <span class="control-color m-1">
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
            {/* <section class="bg-white p-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 text-center">
                            <h5>What do you want to learn today?</h5>
                        </div>
                    </div>
                    <div class="row bordered separated gutter-0 ">
                        {subjects.map((subject) => (
                            <div class="col-sm-12 col-lg-6 col-lg-3 ">
                                <div class="feature-square">
                                    <Link to="/">
                                        <div>
                                            <i class="svg-icon mb-2">
                                                <span>
                                                    <img
                                                        src={subject.image}
                                                        alt={subject.name}
                                                    />
                                                </span>
                                            </i>
                                            <h4 class="fs-18 font-weight-normal text-dark">
                                                {subject.name}
                                            </h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div class="col-sm-12 col-lg-6 col-lg-3 ">
                            <div class="feature-square">
                                <Link to="/">
                                    <div>
                                        <i class="svg-icon mb-2">
                                            <span>
                                                <img
                                                    src="./assets/images/subjects/dark/suggest-new-subject.svg"
                                                    alt="t"
                                                />
                                            </span>
                                        </i>
                                        <h4 class="fs-18 font-weight-normal text-dark">
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

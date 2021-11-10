import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../utils/queries";
import { Link, useHistory } from "react-router-dom";

const Categories = () => {
    const { loading, data } = useQuery(GET_SUBJECTS);
    const subjects = data?.subjects || [];
    console.log(subjects);
    return (
        <>
            <section>
                <div class="card-columns">
                    <div
                        class="card p-3 m-3 text-white text-center bg-success"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Babbage40.png"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
                    <div
                        class="card p-3 m-3 text-white text-center bg-primary"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Z3_Deutsches_Museum.JPG"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
                    <div
                        class="card p-3 m-3 text-white text-center bg-danger"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Euclid.jpg"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
                    <div
                        class="card p-3 m-3 text-white text-center bg-warning"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/RedCrossNursen.jpg/330px-RedCrossNursen.jpg"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
                    <div
                        class="card p-3 m-3 text-white text-center bg-info"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
                    <div
                        class="card p-3 m-3 text-white text-center bg-success"
                        // style={{ maxWidth: "400px" }}
                    >
                        <img
                            class="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Product_life_cycle.png"
                            alt="Card  cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <p class="card-text">1 sub category</p>
                        </div>
                    </div>
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
                            <div class="col-6 col-lg-3 ">
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
                        <div class="col-6 col-lg-3 ">
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

// <div
//     class="card p-3 m-3 text-white text-center bg-success"
//     style={{ maxWidth: "400px" }}
// >
//     <img
//         class="card-img-top"
//         src="https://upload.wikimedia.org/wikipedia/commons/6/67/Babbage40.png"
//         alt="Card  cap"
//     />
//     <div class="card-body">
//         <h5 class="card-title">Computer Science</h5>
//         <p class="card-text">1 sub category</p>
//     </div>
// </div>;

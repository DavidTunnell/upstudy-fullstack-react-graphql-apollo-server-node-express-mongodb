import { Link } from "react-router-dom";
const Dashboard = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    const cardBgColor = "#f5f5f5";
    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay image-blur "
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="container mt-10 mb-3">
                    <div className="row justify-content-center align-items-center">
                        <div
                            className="w-100 p-3 card"
                            style={{ backgroundColor: cardBgColor }}
                        >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col col-md-10 col-lg-8">
                                        <div className="nav nav-tabs mb-1">
                                            <Link
                                                className="nav-item nav-link active"
                                                data-toggle="tab"
                                                to="/"
                                            >
                                                Projects
                                            </Link>
                                            <Link
                                                className="nav-item nav-link"
                                                data-toggle="tab"
                                                to="/"
                                            >
                                                Video Games
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        role="tabpanel"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row">
                                                    <div className="col ">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            General Information
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="firstName">
                                                                            First
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="firstName"
                                                                            aria-describedby="firstName"
                                                                            placeholder="John/"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="secondName">
                                                                            Second
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="secondName"
                                                                            aria-describedby="secondName"
                                                                            placeholder="Doe"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userMail">
                                                                            Email
                                                                            address
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="johndoe@example.com"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 align-items-center">
                                                                <div className="col-3">
                                                                    <button className="btn btn-secondary">
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            Profile Information
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userCity">
                                                                            City
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userCity"
                                                                            aria-describedby="userCity"
                                                                            placeholder="New York"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userCountry">
                                                                            Country
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userCountry"
                                                                            aria-describedby="userCountry"
                                                                            placeholder="United States"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userTwitter">
                                                                            Twitter
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text">
                                                                                    @
                                                                                </span>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                id="userTwitter"
                                                                                className="form-control"
                                                                                placeholder="Username"
                                                                                aria-label="Username"
                                                                                aria-describedby="userTwitter"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleFormControlTextarea1">
                                                                            About
                                                                        </label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="exampleFormControlTextarea1"
                                                                            rows="3"
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-3">
                                                                    <button className="btn btn-secondary">
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
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
            </div>
        </>
    );
};

export default Dashboard;

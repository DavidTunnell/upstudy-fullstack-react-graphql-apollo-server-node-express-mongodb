import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth from "../utils/auth";
const Dashboard = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    const cardBgColor = "#f5f5f5";

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [isVerified, setIsVerified] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const userLoggedIn = Auth.getProfile().data;
        console.log(userLoggedIn);
        setUsername(userLoggedIn.username);
        setEmail(userLoggedIn.email);
        setIsVerified(userLoggedIn.isVerified);
    }, []);

    const handlePasswordInputChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleSubmit = (event) => {
        console.log(password);
    };

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
                                                to="/dashboard"
                                            >
                                                Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        role="tabpanel"
                                    >
                                        <div className="row justify-content-center pb-10 mb-10">
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
                                                                            Username
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="username"
                                                                            aria-describedby="username"
                                                                            placeholder={
                                                                                username
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="secondName">
                                                                            Email
                                                                            Address
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="email"
                                                                            aria-describedby="email"
                                                                            placeholder={
                                                                                email
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 mb-3">
                                                                <div className="col">
                                                                    <div class="custom-control custom-checkbox ml-1">
                                                                        <input
                                                                            type="checkbox"
                                                                            class="custom-control-input"
                                                                            id="customCheckDisabled"
                                                                            checked={
                                                                                isVerified
                                                                            }
                                                                            disabled
                                                                        />
                                                                        <label
                                                                            class="custom-control-label is-verified-label"
                                                                            for="customCheckDisabled"
                                                                        >
                                                                            Is
                                                                            Verified
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr class="mt-2 mb-2" />
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userMail">
                                                                            Password
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="********"
                                                                            onChange={
                                                                                handlePasswordInputChange
                                                                            }
                                                                            value={
                                                                                password
                                                                            }
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 align-items-center">
                                                                <div className="col-3">
                                                                    <button
                                                                        className="btn btn-secondary"
                                                                        onClick={
                                                                            handleSubmit
                                                                        }
                                                                    >
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

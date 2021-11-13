import { Link, useHistory } from "react-router-dom";
import Auth from "../utils/auth";
import { useSelector } from "react-redux";
import { useState, useEffect, useReducer } from "react";

const BetaFeedback = ({ toTop }) => {
    //get whether user is logged in from redux store
    const user = useSelector((state) => state.loggedInUser);
    //use react router history
    const history = useHistory();

    //if the user isn't logged in send them to login screen
    // useEffect(() => {
    //     console.log(user);
    //     if (user.roles.some((e) => e.role === "admin") && Auth.loggedIn()) {
    //         /* vendors contains the element we're looking for */
    //         console.log("is admin and is logged in");
    //     } else if (Auth.loggedIn()) {
    //         console.log("is NOT admin and is logged in");
    //     }
    //     if (!Auth.loggedIn()) {
    //         console.log("not logged in");
    //         history.push("/login");
    //     }
    // });

    return (
        <>
            <h5 className="mb-2 fs-20 font-weight-normal">Alpha Feedback</h5>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-md">
                        <table class="table table-lined">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Order</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">July 20, 2018</th>
                                    <td>#110</td>
                                    <td>$8021.47</td>
                                </tr>
                                <tr>
                                    <th scope="row">July 20, 2018</th>
                                    <td>#111</td>
                                    <td>$8021.47</td>
                                </tr>
                                <tr>
                                    <th scope="row">July 22, 2018</th>
                                    <td>#112</td>
                                    <td>$815</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BetaFeedback;

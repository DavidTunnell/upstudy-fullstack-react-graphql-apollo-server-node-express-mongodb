import { useQuery, useMutation } from "@apollo/client";
import { GET_BETA_FEEDBACK } from "../utils/queries";
import { ARCHIVE_BETA_FEEDBACK } from "../utils/mutations";
import React, { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { modalActions } from "../redux/actions/";
import { useDispatch } from "react-redux";

const BetaFeedback = () => {
    const { loading, data } = useQuery(GET_BETA_FEEDBACK);
    const [archiveBetaFeedback] = useMutation(ARCHIVE_BETA_FEEDBACK);
    const [feedbackData, setFeedbackData] = useState(data?.betaFeedback);
    //to save data to redux store
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            setFeedbackData(data.betaFeedback);
            // console.log(feedbackData);
        } else {
            console.log("loading");
        }
    }, [loading]);

    const handleFeedbackDetailsClick = (event) => {
        event.preventDefault();
        const idSelected = event.target.getAttribute("data-index");
        console.log(idSelected);
        const result = data.betaFeedback.filter((obj) => {
            return obj._id === idSelected;
        })[0];
        dispatch(
            modalActions.updateAndShowModal(
                `${result.username} - ${new Date(
                    parseInt(result.createdAt)
                ).toLocaleDateString("en-US")}`,
                result.message
            )
        );
    };

    const handleFeedbackArchiveClick = async (event) => {
        event.preventDefault();
        const idSelected = event.target.getAttribute("data-index");
        console.log("handleFeedbackArchiveClick");
        console.log(idSelected);
        try {
            const { data } = await archiveBetaFeedback({
                variables: {
                    feedbackId: idSelected,
                },
            });

            //update state of feedbackData to reflect archived: true
            //find and replace object in array and then set state to new one
            //^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            const copy = { ...feedbackData };

            console.log(feedbackData);
            //copy isnt an array.. this is an issue!!!!!!!!
            console.log(copy);
            const foundIndex = copy.findIndex((x) => x._id == idSelected);

            copy[foundIndex] = data.archiveBetaFeedback;
            setFeedbackData(copy);
            console.log("feedbackData");
            console.log(feedbackData);
            console.log("feedbackData");
            //maybe update state of data.betaFeedback? maybe it should be put in state...
        } catch (err) {
            dispatch(modalActions.updateAndShowModal("Error", err.message));
        }
    };

    return (
        <>
            <h5 className="mb-2 fs-20 font-weight-normal">Alpha Feedback</h5>
            <div className="row">
                <div className="col">
                    <div className="table-responsive-md">
                        <table className="table table-lined ">
                            <thead style={{ textAlign: "center" }}>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.betaFeedback.map((feedback) => (
                                        <tr key={feedback._id}>
                                            <th scope="row">
                                                {new Date(
                                                    parseInt(feedback.createdAt)
                                                ).toLocaleDateString("en-US")}
                                            </th>
                                            <td>{feedback.category}</td>
                                            <td>
                                                {feedback.message.substring(
                                                    0,
                                                    40
                                                )}
                                            </td>
                                            <td className="text-center">
                                                <div class="dropdown">
                                                    <span
                                                        class="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                        role="button"
                                                        id="dropdownMenuLink-3"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="icon-more-vertical fs-22"></i>
                                                    </span>

                                                    <div
                                                        class="dropdown-menu"
                                                        aria-labelledby="dropdownMenuLink-3"
                                                    >
                                                        <button
                                                            class="dropdown-item"
                                                            data-index={
                                                                feedback._id
                                                            }
                                                            onClick={
                                                                handleFeedbackDetailsClick
                                                            }
                                                        >
                                                            Details
                                                        </button>
                                                        <button
                                                            class="dropdown-item"
                                                            data-index={
                                                                feedback._id
                                                            }
                                                            onClick={
                                                                handleFeedbackArchiveClick
                                                            }
                                                        >
                                                            Archive
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BetaFeedback;

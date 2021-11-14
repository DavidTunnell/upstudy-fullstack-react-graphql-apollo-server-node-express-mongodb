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
    const [feedbackData, setFeedbackData] = useState();
    //to save data to redux store
    const dispatch = useDispatch();
    useEffect(() => {
        if (!loading) {
            // dispatch(categoriesActions.categories(data));
            // dispatch(filteredCategoriesActions.setAllCategories(data));
            setFeedbackData(data.betaFeedback);
        }
    }, [data]);
    // useEffect(() => {
    //     if (!loading) {
    //         setFeedbackData(data.betaFeedback);
    //         console.log(feedbackData);
    //     } else {
    //         console.log("loading");
    //     }
    // }, [loading]);

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
                result.message + " | " + result.image
            )
        );
    };

    const handleFeedbackArchiveClick = async (event) => {
        event.preventDefault();
        const idSelected = event.target.getAttribute("data-index");
        try {
            // 1. Make a shallow copy of the items
            let items = [...feedbackData];
            // 2. Make a shallow copy of the item you want to mutate
            const foundIndex = items.findIndex((x) => x._id == idSelected);
            let item = { ...items[foundIndex] };
            // 3. Replace the property you're interested in
            item.archived = true;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            items[foundIndex] = item;
            // 5. Set the state to our new copy
            setFeedbackData(items);
            try {
                const { data } = await archiveBetaFeedback({
                    variables: {
                        feedbackId: idSelected,
                    },
                });
                setFeedbackData(items);
            } catch (error) {
                dispatch(
                    modalActions.updateAndShowModal("Error", error.message)
                );
            }
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
                                {feedbackData &&
                                    feedbackData
                                        .filter(
                                            (feedback) => !feedback.archived
                                        )
                                        .map((feedback) => (
                                            <tr key={feedback._id}>
                                                <th scope="row">
                                                    {new Date(
                                                        parseInt(
                                                            feedback.createdAt
                                                        )
                                                    ).toLocaleDateString(
                                                        "en-US"
                                                    )}
                                                </th>
                                                <td>{feedback.category}</td>
                                                <td>
                                                    {feedback.message.substring(
                                                        0,
                                                        40
                                                    )}
                                                    ...
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

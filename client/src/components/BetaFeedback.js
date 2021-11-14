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
                result.message
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
            // 3. Replace the property you're intested in
            item.archived = true;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            items[foundIndex] = item;
            // 5. Set the state to our new copy
            setFeedbackData(items);
            //https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer/45341595
            // let copy = [...feedbackData],
            //     //Find index of specific object using findIndex method.
            //     objIndex = copy.findIndex((obj) => obj._id == idSelected);

            // //Log object to Console.
            // console.log("Before update: ", copy[objIndex]);
            // console.log(copy[objIndex].archived);
            // //Update object's name property.

            // copy[objIndex].archived = true;

            // //Log object to console again.
            // console.log("After update: ", copy[objIndex]);
            // console.log(feedbackData);
            // const copy = [...feedbackData];
            // console.log(copy);
            // const foundIndex = copy.findIndex((x) => x._id == idSelected);
            // console.log((copy[foundIndex].archived = true));
            //the problem is you aren't setting the copies archive value to true <<<<<<<<<<
            // copy[foundIndex].archived = true;
            // console.log(copy[foundIndex].archived);
            // const { data } = await archiveBetaFeedback({
            //     variables: {
            //         feedbackId: idSelected,
            //     },
            // });

            //update state of feedbackData to reflect archived: true
            //find and replace object in array and then set state to new one
            //^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            // const copy = [...feedbackData];

            // console.log(feedbackData);
            // //copy isnt an array.. this is an issue!!!!!!!!
            // console.log(copy);
            // const foundIndex = copy.findIndex((x) => x._id == idSelected);

            // copy[foundIndex] = data.archiveBetaFeedback;
            // setFeedbackData(copy);
            // console.log("feedbackData");
            // console.log(feedbackData);
            // console.log("feedbackData");
            //maybe update state of data.betaFeedback? maybe it should be put in state...
        } catch (err) {
            dispatch(modalActions.updateAndShowModal("Error", err.message));
        }
        console.log(feedbackData);
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
                                    <th scope="col">archived</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackData &&
                                    feedbackData.map((feedback) => (
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
                                            <td>
                                                {feedback.archived
                                                    ? "true"
                                                    : "false"}
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

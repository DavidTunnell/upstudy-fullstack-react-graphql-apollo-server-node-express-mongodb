import { useQuery } from "@apollo/client";
import { GET_BETA_FEEDBACK } from "../utils/queries";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare, faBookmark } from "@fortawesome/free-solid-svg-icons";

const BetaFeedback = () => {
    const { loading, data } = useQuery(GET_BETA_FEEDBACK);

    useEffect(() => {
        console.log("bbbbbbbbbbbbbbbb");
        console.log(data);
        console.log("bbbbbbbbbbbbbbbb");
        if (!loading) {
            console.log(data);
        } else {
            console.log("loading");
        }
    }, [data, loading]);

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
                                    <th scope="col">Category</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.betaFeedback.map((feedback) => (
                                        <tr>
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
                                                <FontAwesomeIcon
                                                    icon={faShareSquare}
                                                />
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

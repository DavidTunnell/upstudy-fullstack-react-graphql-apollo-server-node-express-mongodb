import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_BETA_FEEDBACK } from "../utils/queries";
const Test = () => {
    //test sandbox component to try out new functionality
    const [betaFeedback, setBetaFeedback] = useState(null);
    const [getBetaFeedbackData] = useLazyQuery(GET_BETA_FEEDBACK, {
        onCompleted: (data) => setBetaFeedback(data.betaFeedback),
        fetchPolicy: "network-only",
    });

    return (
        <>
            <section className="p-0 pt-10 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5 py-md-10">
                        <div>
                            {betaFeedback &&
                                betaFeedback.map((feedback) => (
                                    <p key={feedback._id}>{feedback._id}</p>
                                ))}
                            <button onClick={() => getBetaFeedbackData()}>
                                Click me!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;

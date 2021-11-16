import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_BETA_FEEDBACK } from "../utils/queries";
const Test = () => {
    const bgColor = "#000";
    const [getBetaFeedbackData, { loading, data }] =
        useLazyQuery(GET_BETA_FEEDBACK);

    if (loading) return <p>Loading ...</p>;

    const handleClick = async () => {
        await getBetaFeedbackData();
    };

    return (
        <>
            <section className="p-0 pt-10 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5 py-md-10">
                        <div>
                            {data && <p>{data.betaFeedback[0].message}</p>}
                            <button onClick={handleClick}>Click me!</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;

import React, { useEffect, useState } from "react";

const ShareModal = () => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    const [showBackdrop, setShowBackdrop] = useState(false);

    // useEffect(() => {
    //     const btn = document.getElementById("hidden-open-modal-button");
    //     btn.click();
    //     setShowBackdrop(true);
    // }, []);

    const handleExitModalClick = async (event) => {
        //if the correct elements are clicked hide the modal and backdrop
        if (
            event.target.id === "generic-modal" ||
            event.target.id === "close-generic-modal-button" ||
            event.target.id === "close-generic-modal-icon"
        ) {
            const btn = document.getElementById("close-generic-modal-button");
            btn.click();
            setShowBackdrop(false);
        }
    };

    return (
        <>
            <button
                type="button"
                id="hidden-open-modal-button"
                className="invisible"
                style={{ display: "none" }}
                data-toggle="modal"
                data-target="#generic-modal"
                data-backdrop="false"
            ></button>
            <div
                className={`${showBackdrop ? "modal-backdrop fade show" : ""}`}
            ></div>
            <div
                className="modal fade"
                id="generic-modal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="generic-modal"
                aria-hidden="true"
                onClick={handleExitModalClick}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header justify-content-end ">
                            <button
                                type="button"
                                className="close"
                                id="close-generic-modal-button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                    id="close-generic-modal-icon"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-center  mt-n3">
                            Test!@#$%^&*()_+
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShareModal;

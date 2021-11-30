import React, { useEffect, useState } from "react";

const ShareModal = ({ showModal, setShowModal }) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
        if (showModal) {
            const btn = document.getElementById(
                "hidden-open-modal-button-share"
            );
            btn.click();
            setShowBackdrop(true);
        }
    }, [showModal]);

    const handleExitModalClick = async (event) => {
        //if the correct elements are clicked hide the modal and backdrop
        if (
            event.target.id === "share-modal" ||
            event.target.id === "close-share-modal-button" ||
            event.target.id === "close-share-modal-icon"
        ) {
            const btn = document.getElementById("close-share-modal-button");
            btn.click();
            setShowBackdrop(false);
            setShowModal(false);
        }
    };

    return (
        <>
            <button
                type="button"
                id="hidden-open-modal-button-share"
                className="invisible"
                style={{ display: "none" }}
                data-toggle="modal"
                data-target="#share-modal"
                data-backdrop="false"
            ></button>
            <div
                className={`${showBackdrop ? "modal-backdrop fade show" : ""}`}
            ></div>
            <div
                className="modal fade"
                id="share-modal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="share-modal"
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
                                id="close-share-modal-button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                    id="close-share-modal-icon"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-center mt-n3">
                            Test!@#$%^&*()_+
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShareModal;

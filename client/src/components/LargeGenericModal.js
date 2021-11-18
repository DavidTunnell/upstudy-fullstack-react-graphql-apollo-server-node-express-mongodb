import React, { useEffect, useState } from "react";

const LargeGenericModal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let closeModal = params.closeFunction;
    let openModal = params.openFunction;
    let showModal = params.showModal;
    let BetaNoticeModalBody = params.betaNoticeModalBody;
    // let closeModal = params.closeModal;
    // let title = params.title;
    // let content = params.content;
    // let imageUrl = params.imageUrl;
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
        if (showModal) {
            const btn = document.getElementById(
                "hidden-large-open-modal-button"
            );
            btn.click();
            setShowBackdrop(true);
        }
    }, [showModal]);

    const handleBackdropClick = async (event) => {
        if (
            event.target.id === "large-generic-modal" ||
            event.target.id === "close-large-generic-modal-button" ||
            event.target.id === "close-large-generic-modal-icon"
        ) {
            console.log("handleBackdropClick");
            console.log(event.target.id);
            closeModal();
            const btn = document.getElementById(
                "close-large-generic-modal-button"
            );
            btn.click();
            setShowBackdrop(false);
        }
    };

    //  <div
    //     className="modal fade"
    //     id="feedback-modal"
    //     tabIndex="-1"
    //     aria-hidden="true"
    // >
    //     <div className="modal-dialog modal-xl">
    //         <div className="modal-content bg-light">
    //             <div className="justify-content-end">
    //                 <button
    //                     type="button"
    //                     className="close m-1"
    //                     data-dismiss="modal"
    //                     aria-label="Close"
    //                 >
    //                     <span
    //                         aria-hidden="true"
    //                         className="icon-x"
    //                     ></span>
    //                 </button>
    //             </div>
    return (
        <>
            <button
                type="button"
                id="hidden-large-open-modal-button"
                className="invisible"
                style={{ display: "none" }}
                data-toggle="modal"
                data-target="#large-generic-modal"
                data-backdrop="false"
            ></button>
            <div
                className={`${showBackdrop ? "modal-backdrop fade show" : ""}`}
                onClick={handleBackdropClick}
            ></div>
            <div
                class="modal fade"
                id="large-generic-modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="large-generic-modal"
                aria-hidden="true"
                onClick={handleBackdropClick}
            >
                <div
                    class="modal-dialog modal-dialog-centered large-generic-modal "
                    role="document"
                >
                    <div class="modal-content bg-light ">
                        <div class="modal-header justify-content-end ">
                            <button
                                type="button"
                                class="close"
                                id="close-large-generic-modal-button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={handleBackdropClick}
                            >
                                <span
                                    aria-hidden="true"
                                    class="icon-x"
                                    id="close-large-generic-modal-icon"
                                    onClick={handleBackdropClick}
                                ></span>
                            </button>
                        </div>
                        <BetaNoticeModalBody />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargeGenericModal;

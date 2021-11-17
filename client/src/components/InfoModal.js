import React, { useEffect, useState } from "react";

const InfoModal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let showModal = params.show;
    let closeModal = params.closeModal;
    let title = params.title;
    let content = params.content;
    let imageUrl = params.imageUrl;
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
        if (showModal) {
            var btn = document.getElementById("hidden-open-modal-button");
            btn.click();
            setShowBackdrop(true);
        }
    });

    const handleBackdropClick = async (event) => {
        if (
            event.target.id === "generic-modal" ||
            event.target.id === "close-generic-modal-button" ||
            event.target.id === "close-generic-modal-icon"
        ) {
            console.log("handleBackdropClick");
            console.log(event.target.id);
            closeModal();
            var btn = document.getElementById("close-generic-modal-button");
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
                onClick={handleBackdropClick}
            ></div>
            <div
                class="modal fade"
                id="generic-modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="generic-modal"
                aria-hidden="true"
                onClick={handleBackdropClick}
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header justify-content-end ">
                            <button
                                type="button"
                                class="close"
                                id="close-generic-modal-button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    class="icon-x"
                                    id="close-generic-modal-icon"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-center  mt-n3">
                            <h3>{title}</h3>
                            <p>{content}</p>
                            {imageUrl?.toString().length > 0 && (
                                <div>
                                    <img src={imageUrl} alt={title} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoModal;

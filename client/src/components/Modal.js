import React, { useEffect } from "react";

const Modal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let showModal = params.show;
    let closeModal = params.closeModal;
    let title = params.title;
    let content = params.content;
    let imageUrl = params.imageUrl;

    useEffect(() => {
        if (showModal) {
            var btn = document.getElementById("hidden-open-modal-button");
            btn.click();
        }
    });

    const handleBackdropClick = async (event) => {
        if (event.target.id === "generic-modal") {
            console.log("handleBackdropClick");
            console.log(event.target.id);
            closeModal();
            var btn = document.getElementById("close-generic-modal-button");
            btn.click();
        }
    };

    return (
        <>
            <button
                type="button"
                id="hidden-open-modal-button"
                className="invisible"
                data-toggle="modal"
                data-target="#generic-modal"
                data-backdrop="false"
            ></button>
            {/* <div
                className="modal-backdrop fade show"
                onClick={handleBackdropClick}
            ></div> */}
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
                                <span aria-hidden="true" class="icon-x"></span>
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

export default Modal;

import React, { useEffect, useState } from "react";

const LargeGenericModal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let closeModal = params.closeFunction;
    // let closeModal = params.closeModal;
    // let title = params.title;
    // let content = params.content;
    // let imageUrl = params.imageUrl;
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
        const btn = document.getElementById("hidden-large-open-modal-button");
        btn.click();
        setShowBackdrop(true);
    }, []);

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
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
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

                        <div className="modal-body text-center  mt-n3">
                            <h3>test</h3>
                            <p>p content</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargeGenericModal;

import React, { useEffect, useState } from "react";

const LargeGenericModal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let closeModal = params.closeFunction;
    let openModal = params.openFunction;
    let showModal = params.showModal;
    let BodyComponent = params.bodyComponent;

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

    const submitForm = (event) => {
        closeModal();
        const btn = document.getElementById("close-large-generic-modal-button");
        btn.click();
        setShowBackdrop(false);
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
                        <BodyComponent
                            closeFunction={closeModal}
                            handleModalExit={submitForm}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargeGenericModal;

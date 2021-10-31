import { useState } from "react";

const Modal = (showModal, errorMessage) => {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <>
            <div
                className={`modal fade ${showAlert ? "show" : ""}`}
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: `${showAlert ? "block" : "none"}` }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="justify-content-end">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowAlert(false)}
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <h3>Error</h3>
                            <p>{errorMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` ${showAlert ? "modal-backdrop fade show" : ""}`}
            ></div>
        </>
    );
};

export default Modal;

import React, { useState } from "react";
import LargeGenericModal from "./LargeGenericModal";
import BetaNoticeModalBody from "./BetaNoticeModalBody";
import Test from "./Test";

const BetaNotice = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = () => {
        setShowModal(true);
    };
    return (
        <>
            <section className="bg-light p-6">
                <div className="container ">
                    <div className="boxed bg-primary p-5 text-white">
                        <div className="row justify-content-between align-items-center text-center text-md-left">
                            <div className="col-md-3">
                                <h3>We're in Alpha.</h3>
                            </div>
                            <div className="col-md-6 mt-1 mt-md-0">
                                <p>
                                    Did you find a bug? Want to make a
                                    suggestion? If you have any feedback please
                                    let us know.
                                </p>
                            </div>
                            <div className="col-md-3 mt-1 mt-md-0 text-lg-right">
                                <button
                                    type="button"
                                    className="btn btn-white btn-rounded px-5"
                                    data-toggle="modal"
                                    data-target="#feedback-modal"
                                    onClick={openModal}
                                >
                                    Write Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LargeGenericModal
                closeFunction={closeModal}
                openFunction={openModal}
                showModal={showModal}
                betaNoticeModalBody={BetaNoticeModalBody}
            />
        </>
    );
};

export default BetaNotice;

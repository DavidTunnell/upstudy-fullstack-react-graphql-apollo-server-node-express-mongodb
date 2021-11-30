import React, { useEffect, useState } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
require("dotenv").config();

//https://www.npmjs.com/package/react-share

const ShareModal = ({ showModal, setShowModal, sharePath }) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    const [showBackdrop, setShowBackdrop] = useState(false);
    const shareUrl = process.env.REACT_APP_BASE_URL + "/" + sharePath;
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
                        <div className="text-center pb-2">{shareUrl}</div>
                        <div className="modal-body text-center mt-n3">
                            <EmailShareButton
                                subject={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                            >
                                <EmailIcon size={40} round />
                            </EmailShareButton>{" "}
                            <TwitterShareButton
                                title={
                                    "https://www.upstudy.io - The first place to look when you study. @upstudyio"
                                }
                                url={shareUrl}
                                hashtags={["upstudy"]}
                                related={["upstudyio"]}
                            >
                                <TwitterIcon size={40} round />
                            </TwitterShareButton>{" "}
                            <RedditShareButton
                                title={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                            >
                                <RedditIcon size={40} round />
                            </RedditShareButton>{" "}
                            {/*delete if it doesnt work on prod */}
                            <LinkedinShareButton
                                title={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                            >
                                <LinkedinIcon size={40} round />
                            </LinkedinShareButton>{" "}
                            <FacebookShareButton
                                title={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                                hashtags={["upstudy"]}
                            >
                                <FacebookIcon size={40} round />
                            </FacebookShareButton>{" "}
                            <TelegramShareButton
                                title={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                            >
                                <TelegramIcon size={40} round />
                            </TelegramShareButton>{" "}
                            <WhatsappShareButton
                                title={
                                    "Upstudy.io - The first place to look when you study."
                                }
                                url={shareUrl}
                            >
                                <WhatsappIcon size={40} round />
                            </WhatsappShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShareModal;

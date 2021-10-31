import { useState } from "react";
// import { useHistory } from "react-router-dom";
const Modal = (params) => {
    //showModal, title, content
    const [showModal, setShowModal] = useState(params.showArg);
    const [title, setTitle] = useState(params.titleArg);
    const [content, setContent] = useState(params.contentArg);
    console.log(params);
    // const history = useHistory();
    // const errorData = history.location.state?.data;
    // console.log(errorData);

    return (
        <>
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: `${showModal ? "block" : "none"}` }}
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
                                onClick={() => setShowModal(false)}
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` ${showModal ? "modal-backdrop fade show" : ""}`}
            ></div>
        </>
    );
};

export default Modal;

const Modal = (params) => {
    //get params passed in when calling modal, these are ultimately derived form redux store
    let showModal = params.show;
    let closeModal = params.closeModal;
    let title = params.title;
    let content = params.content;
    return (
        <>
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
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
                                onClick={() => closeModal()}
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
                onClick={() => closeModal()}
                className={` ${showModal ? "modal-backdrop fade show" : ""}`}
            ></div>
        </>
    );
};

export default Modal;

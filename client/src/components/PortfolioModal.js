const PortfolioModal = ({ projectData }) => {
    const removeActive = (e) => {
        e.target.closest("button").blur();
    };
    return (
        <>
            <div
                className="modal fade"
                id="project-modal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-xl modal-larger"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="row" data-aos="zoom-in">
                            <div className="col">
                                <button
                                    type="button"
                                    className="close close-absolute bg-light m-1"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="icon-x"
                                    ></span>
                                </button>

                                <div className="boxed p-5">
                                    <div className="container">
                                        <div className="row justify-content-between align-items-center mobile-modal">
                                            <div className="col-md-5 mobile-modal">
                                                <h2>
                                                    <b>
                                                        {projectData &&
                                                            projectData.title}
                                                    </b>
                                                </h2>
                                                <div className="mb-2">
                                                    {projectData.techSkillsData.map(
                                                        (element) => (
                                                            <div
                                                                className="badge badge-pill badge-success"
                                                                style={{
                                                                    backgroundColor:
                                                                        element.bgColor,
                                                                    margin: "3px",
                                                                    color: element.textColor,
                                                                }}
                                                                key={element.id}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div>
                                                    <p>{projectData.details}</p>
                                                    {projectData.disclaimer && (
                                                        <p>
                                                            {
                                                                projectData.disclaimer
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                                {projectData.openSource ? (
                                                    <div className="btn-group mt-2 container mobile-modal ">
                                                        <a
                                                            href={
                                                                projectData.demoUrl
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <button
                                                                className="btn bg-light m-1 mobile-buttons"
                                                                type="button"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    removeActive(
                                                                        e
                                                                    );
                                                                }}
                                                            >
                                                                <div>
                                                                    <i className="icon-monitor fs-60"></i>
                                                                </div>
                                                                <div>
                                                                    View Demo
                                                                </div>
                                                            </button>
                                                        </a>
                                                        <a
                                                            href={
                                                                projectData.gitHubUrl
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <button
                                                                className="btn bg-light m-1 mobile-buttons"
                                                                type="button"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    removeActive(
                                                                        e
                                                                    );
                                                                }}
                                                            >
                                                                <div>
                                                                    <i className="icon-github fs-60"></i>
                                                                </div>
                                                                <div>
                                                                    GitHub Repo
                                                                </div>
                                                            </button>
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div className="d-flex justify-content-center mt-2">
                                                        <a
                                                            href={
                                                                projectData.companyUrl
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            onClick={(e) => {
                                                                removeActive(e);
                                                            }}
                                                        >
                                                            <button className="btn bg-light m-1">
                                                                <div>
                                                                    <i className="icon-monitor fs-60"></i>
                                                                </div>
                                                                <div>
                                                                    View Company
                                                                    Site
                                                                </div>
                                                            </button>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-6 modal-image">
                                                <img
                                                    src={projectData.modalImage}
                                                    alt={projectData.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioModal;

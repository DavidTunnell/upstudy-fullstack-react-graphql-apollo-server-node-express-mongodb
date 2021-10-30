import { Link } from "react-router-dom";
const Hero = () => {
    const heroPopInImage = "/assets/images/hero-pop-in.svg";
    const fullResumePdf =
        "/assets/files/David-Tunnell-Resume-2021-ATS-Template.pdf";
    const onePageResumePdf =
        "/assets/files/David-Tunnell-Resume-2021-One-Page.pdf";
    const bgColor = "#f94144";
    return (
        <>
            {/* to set !important in react: https://joshtronic.com/2018/03/22/how-to-important-inline-styles-in-react/ */}
            <section
                className="p-0 pt-10 bg-primary text-white"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty(
                            "background-color",
                            bgColor,
                            "important"
                        );
                    }
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5 py-md-10">
                        <div className="col-12 col-lg-6 text-lg-left mobile-center">
                            <h1 className="display-3 mb-0">
                                Hi, I'm <b>David Tunnell</b>.
                            </h1>
                            <h1 className="display-3">
                                A Fullstack Developer and IT Professional.
                            </h1>
                            <div>
                                <Link
                                    to={fullResumePdf}
                                    target="_blank"
                                    // download
                                >
                                    <button
                                        className="btn btn-white mr-1 mb-1"
                                        type="button"
                                    >
                                        Download Full Resume
                                    </button>
                                </Link>
                                <Link
                                    to={onePageResumePdf}
                                    target="_blank"
                                    // download
                                >
                                    <button
                                        className="btn btn-white mr-1 mb-1"
                                        type="button"
                                    >
                                        Download One Page Resume
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-12 col-lg-6"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <img src={heroPopInImage} alt="Programmer's Back" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

import { Link, useHistory } from "react-router-dom";
const HomeHero = () => {
    const bgColor = "#2e4fc7";
    return (
        <>
            <section
                class="bg-blue"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty(
                            "background-color",
                            bgColor,
                            "important"
                        );
                    }
                }}
                style={{ overflow: "hidden" }}
            >
                <div
                    class="swiper-container text-white"
                    data-top-top="transform: translateY(0px);"
                    data-top-bottom="transform: translateY(250px);"
                >
                    <div class="mt-10">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 align-self-center text-center">
                                    <h1 class="display-2">
                                        The <b>first place</b> to look when you
                                        study.
                                    </h1>
                                    <span className="p-1">
                                        <Link
                                            to="/signup"
                                            class="btn btn-white btn-lg btn-rounded px-5"
                                        >
                                            Sign Up
                                        </Link>
                                    </span>
                                    {/* <span className="p-1">
                                        <Link
                                            to="/signup"
                                            class="btn btn-white btn-lg btn-rounded px-5"
                                        >
                                            How It Works
                                        </Link>
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHero;

const Category = (params) => {
    var passedData = params.data;
    const bgColor = "#3c66ff";
    //Category Component! - {passedData}
    return (
        <>
            <section
                className="bg-blue"
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
                    className="swiper-container text-white"
                    data-top-top="transform: translateY(0px);"
                    data-top-bottom="transform: translateY(250px);"
                >
                    <div className="mt-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 align-self-center text-center">
                                    <h1 className="display-2">{passedData}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;

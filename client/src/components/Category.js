const Category = (params) => {
    const passedData = params.data;
    console.log("in category component");
    console.log(passedData);
    console.log("in category component");
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
                                    <h1 className="display-2">
                                        {passedData.name}
                                    </h1>
                                    <p>{passedData.description}</p>
                                    <p>Id: {passedData._id}</p>
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

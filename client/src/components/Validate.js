import Auth from "../utils/auth";
const Test = () => {
    const bgColor = "#000";
    return (
        <>
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
                            Validate Email
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;

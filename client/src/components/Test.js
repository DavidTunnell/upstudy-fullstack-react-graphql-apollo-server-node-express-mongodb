import Auth from "../utils/auth";
const Test = () => {
    const bgColor = "#000";
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
                            Logged In:{" "}
                            {Auth.loggedIn() ? <>true</> : <>false</>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;

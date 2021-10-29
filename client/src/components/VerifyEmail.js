import { Link } from "react-router-dom";
const VerifyEmail = () => {
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/verify-bg.jpg)",
        },
    };

    //http://localhost:3000/verify?name=ferret&color=purple
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let n = params.get("name");
    let c = params.get("color");
    console.log(n + " | " + c);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay image-blur"
                    style={styles.notFoundStyle}
                ></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center vh-100">
                        <div className="col-md-6 col-lg-4 text-white text-center">
                            <h1>Check your email</h1>
                            <p>
                                Click the link to verify your email address. You
                                can continue to use the site but will be
                                prompted to verify your email address each time
                                you sign in.
                            </p>
                            <p>
                                <Link to="/" className="link">
                                    Return Home
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyEmail;

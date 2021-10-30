import { Link } from "react-router-dom";
const VerifyEmail = () => {
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/verify-bg.jpg)",
        },
    };

    //http://localhost:3000/verify?name=ferret&color=purple
    const search = window.location.search;
    //would it be better to use useParams()? -https://i.imgur.com/PB0o9kF.png
    //if invalid send to 404 or let them know? let them know..
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
                                {/* add buttons here to return home and resend email validation link 
                                also add use error for mutation calls in login line on https://i.imgur.com/YSTWiYb.png
                                loading also works for mutation calls
                                -consider using cache for better performance (reduces db calls)- https://i.imgur.com/kjEpUyZ.png - https://i.imgur.com/TPKx3lO.png
                                -also, use parameters in routes to pass certain types of data - https://i.imgur.com/PB0o9kF.png
                                */}
                                <Link to="/" className="link">
                                    Continue to Site
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

import { Link, useHistory } from "react-router-dom";
const Error = () => {
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(/assets/images/404-bg.jpg)",
        },
    };
    const history = useHistory();
    const errorData = history.location.state?.data;
    console.log(errorData);
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
                            <h1>Error</h1>
                            <p>{errorData.message}</p>
                            <p>
                                <Link to="/" className="link">
                                    Click here to return home.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;

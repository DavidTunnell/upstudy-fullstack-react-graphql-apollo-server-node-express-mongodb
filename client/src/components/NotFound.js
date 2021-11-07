import { Link } from "react-router-dom";
const NotFound = () => {
    //local styling
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/404-bg.jpg)",
        },
    };
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
                            <h1 className="error-text">404</h1>
                            <p>
                                The page you were looking for wasn't found,
                                <Link to="/" className="link">
                                    click here to return home.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;

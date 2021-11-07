import Test from "./Test";
import useScrollToTop from "../utils/useScrollToTop";

const Home = () => {
    //smooth scroll if on same page routing
    useScrollToTop();
    return (
        <div className="home">
            <Test />
        </div>
    );
};

export default Home;

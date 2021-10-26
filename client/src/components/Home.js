import Test from "./Test";
import useScrollToTop from "../utils/useScrollToTop";

const Home = () => {
    useScrollToTop();
    return (
        <div className="home">
            <Test />
        </div>
    );
};

export default Home;

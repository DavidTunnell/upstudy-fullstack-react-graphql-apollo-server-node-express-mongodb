import Categories from "./Categories";
import Test from "./Test";
import SearchBar from "./SearchBar";
import useScrollToTop from "../utils/useScrollToTop";

const Home = () => {
    //smooth scroll if on same page routing
    useScrollToTop();
    return (
        <div className="home">
            <Test />
            <SearchBar />
            <Categories />
        </div>
    );
};

export default Home;

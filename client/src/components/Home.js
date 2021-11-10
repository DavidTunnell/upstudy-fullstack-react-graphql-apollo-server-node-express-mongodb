import Categories from "./Categories";
import HomeHero from "./HomeHero";
import SearchBar from "./SearchBar";
import useScrollToTop from "../utils/useScrollToTop";

const Home = () => {
    //smooth scroll if on same page routing
    useScrollToTop();
    return (
        <div className="home">
            <HomeHero />
            <SearchBar />
            <Categories />
        </div>
    );
};

export default Home;

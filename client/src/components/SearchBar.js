import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <>
            <section className="bg-light p-2">
                <div className="container ">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-12">
                            <div class="input-group rounded">
                                <input
                                    class="form-control py-2 border-right-0 border"
                                    type="search"
                                    placeholder="Search subjects..."
                                />
                                <span
                                    class="input-group-append"
                                    style={{
                                        border: "1px solid #e5e5e5",
                                        borderRadius: "0.25rem",
                                    }}
                                >
                                    <div class="input-group-text bg-white text-muted">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row text-white justify-content-between align-items-center">
                        <div className="col-md-12">
                            <div className="input-group rounded">
                                <input
                                    type="text"
                                    className="form-control px-3"
                                    placeholder="Search subjects..."
                                    aria-label="Search lessons"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default SearchBar;

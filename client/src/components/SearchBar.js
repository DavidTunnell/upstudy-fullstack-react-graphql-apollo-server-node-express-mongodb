import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredCategoriesActions } from "../redux/actions/";
const SearchBar = () => {
    const categories = useSelector((state) => state.categories);
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
        console.log(searchInput, categories);
        // dispatch(filteredCategoriesActions.categories(value));
        dispatch(filteredCategoriesActions.filterCategories(value));
    };

    return (
        <>
            <section className="bg-light p-2">
                <div className="container ">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-12">
                            <div className="input-group rounded">
                                <input
                                    className="form-control py-2 border-right-0 border"
                                    type="search"
                                    placeholder="Search subjects..."
                                    onChange={handleSearchInputChange}
                                    value={searchInput}
                                />
                                <span
                                    className="input-group-append"
                                    style={{
                                        border: "1px solid #e5e5e5",
                                        borderRadius: "0.25rem",
                                    }}
                                >
                                    <div className="input-group-text bg-white text-muted">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="border-top"></div> */}
        </>
    );
};

export default SearchBar;

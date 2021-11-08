const SearchBar = () => {
    return (
        <>
            <section className="bg-dark p-2">
                <div className="container">
                    <div className="row text-white justify-content-between align-items-center">
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchBar;

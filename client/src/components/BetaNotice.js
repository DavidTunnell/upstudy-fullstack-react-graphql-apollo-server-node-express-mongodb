const SearchBar = () => {
    return (
        <>
            <section>
                <div class="container ">
                    <div class="boxed bg-primary p-5 text-white m-5">
                        <div class="row justify-content-between align-items-center text-center text-md-left">
                            <div class="col-md-3">
                                <h3>We're in Alpha.</h3>
                            </div>
                            <div class="col-md-6 mt-1 mt-md-0">
                                <p>
                                    Did you find a bug? Want to make a
                                    suggestion? If you have any feedback please
                                    let us know.
                                </p>
                            </div>
                            <div class="col-md-3 mt-1 mt-md-0 text-lg-right">
                                <button class="btn btn-white btn-rounded px-5">
                                    Write Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchBar;

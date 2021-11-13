const DashboardSandbox = () => {
    const bgColor = "#3c66ff";
    return (
        <section style={{ backgroundColor: bgColor }} className="pb-5 pt-5">
            <div style={{ backgroundColor: bgColor, height: "5rem" }}></div>
            <div class="row d-flex justify-content-center flex-nowrap">
                <div class="card w-75">
                    <div class="card-body">
                        <div class="mt-n10">
                            <div className="p-0">
                                <div
                                    className="image image-overlay image-cover"
                                    // style={{background-image:url(../../assets/images/demo/minimal/portfolio-bg-2.jpg)}}
                                    data-top-top="transform: translateY(0px);"
                                    data-top-bottom="transform: translateY(-250px);"
                                ></div>
                                <div className="containe">
                                    <div
                                        className="row justify-content-center align-items-end vh-30 "
                                        style={{ width: "80%" }}
                                    >
                                        <div className="col col-md-10 col-lg-8">
                                            <div className="row align-items-center">
                                                <div className="col-4 col-lg-3">
                                                    <img
                                                        className="mr-3 avatar avatar-xl rounded"
                                                        src="../../assets/images/demo/user-2.jpg"
                                                        alt="Generic placeholder"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-8">
                                                            <h2 className="mb-0">
                                                                <b>James</b> Doe
                                                            </h2>
                                                            <span className="text-muted">
                                                                Senior Visual
                                                                Designer
                                                            </span>
                                                        </div>
                                                        <div className="col-md-4 text-left text-md-right">
                                                            <button
                                                                type="button"
                                                                className="btn btn-rounded btn-ico btn-white"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Add Friend"
                                                            >
                                                                <i className="icon-plus2 fs-20"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-0">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col col-md-10 col-lg-8">
                                        <div className="nav nav-tabs mb-1">
                                            <a
                                                className="nav-item nav-link active"
                                                data-toggle="tab"
                                                href="#demo-2-1"
                                            >
                                                Profile
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                data-toggle="tab"
                                                href="#demo-2-2"
                                            >
                                                Connections
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                data-toggle="tab"
                                                href="#demo-2-3"
                                            >
                                                Groups
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                data-toggle="tab"
                                                href="#demo-2-4"
                                            >
                                                Settings
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                data-toggle="tab"
                                                href="#demo-2-5"
                                            >
                                                Payments
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="container">
                                <div className="tab-content" id="demo-2">
                                    <div
                                        className="tab-pane show active"
                                        id="demo-2-1"
                                        role="tabpanel"
                                        aria-labelledby="demo-2-1"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row gutter-1 mb-2">
                                                    <div className="col-6 col-md-4 col-lg-3">
                                                        <div className="equal">
                                                            <div className="boxed bg-primary text-white">
                                                                <div className="equal-header">
                                                                    <b className="h2">
                                                                        89
                                                                    </b>
                                                                </div>
                                                                <div className="equal-footer">
                                                                    <span className="text-muted">
                                                                        friends
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4 col-lg-3">
                                                        <div className="equal">
                                                            <div className="boxed">
                                                                <div className="equal-header">
                                                                    <b className="h2">
                                                                        14
                                                                    </b>
                                                                </div>
                                                                <div className="equal-footer">
                                                                    <span className="text-muted">
                                                                        likes
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4 col-lg-3">
                                                        <div className="equal">
                                                            <div className="boxed">
                                                                <div className="equal-header">
                                                                    <b className="h2">
                                                                        9
                                                                    </b>
                                                                </div>
                                                                <div className="equal-footer">
                                                                    <span className="text-muted">
                                                                        articles
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4 col-lg-3">
                                                        <div className="equal">
                                                            <div className="boxed">
                                                                <div className="equal-header">
                                                                    <b className="h2">
                                                                        119
                                                                    </b>
                                                                </div>
                                                                <div className="equal-footer">
                                                                    <span className="text-muted">
                                                                        following
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-1">
                                                    <div className="col">
                                                        <article className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col-6">
                                                                        <div className="media align-items-center">
                                                                            <img
                                                                                className="avatar rounded mr-1"
                                                                                src="../../assets/images/demo/user-2.jpg"
                                                                                alt="placeholder"
                                                                            />
                                                                            <div className="media-body">
                                                                                <span className="mt-0">
                                                                                    Michael
                                                                                    Doe
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 text-right">
                                                                        <small className="text-mute">
                                                                            2
                                                                            hours
                                                                            ago
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body overflow-hidden">
                                                                <div
                                                                    className="owl-carousel gallery visible"
                                                                    data-items="[2,2]"
                                                                    data-margin="10"
                                                                    data-nav="true"
                                                                >
                                                                    <figure className="photo equal equal-double">
                                                                        <a
                                                                            href="../../assets/images/demo/image-square-1.jpg"
                                                                            title="Image title"
                                                                        >
                                                                            <img
                                                                                src="../../assets/images/demo/image-square-1.jpg"
                                                                                alt="placeholder"
                                                                            />
                                                                        </a>
                                                                    </figure>
                                                                    <figure className="photo equal equal-double">
                                                                        <a
                                                                            href="../../assets/images/demo/image-square-2.jpg"
                                                                            title="Image title"
                                                                        >
                                                                            <img
                                                                                src="../../assets/images/demo/image-square-2.jpg"
                                                                                alt="placeholder"
                                                                            />
                                                                        </a>
                                                                    </figure>
                                                                    <figure className="photo equal equal-double">
                                                                        <a
                                                                            href="../../assets/images/demo/image-square-3.jpg"
                                                                            title="Image title"
                                                                        >
                                                                            <img
                                                                                src="../../assets/images/demo/image-square-3.jpg"
                                                                                alt="placeholder"
                                                                            />
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <a
                                                                            href="/"
                                                                            className="btn btn-ico btn-sm rounded btn-outline-light text-red"
                                                                        >
                                                                            <i className="icon-heart2 fs-22"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col text-right">
                                                                        <div className="dropdown">
                                                                            <a
                                                                                className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                                href="/"
                                                                                role="button"
                                                                                id="dropdownMenuLink"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="icon-more-vertical fs-22"></i>
                                                                            </a>

                                                                            <div
                                                                                className="dropdown-menu"
                                                                                aria-labelledby="dropdownMenuLink"
                                                                            >
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Make
                                                                                    Primary
                                                                                </a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <article className="card">
                                                            <div className="card-header">
                                                                <div className="row align-items-center">
                                                                    <div className="col-6">
                                                                        <div className="media align-items-center">
                                                                            <img
                                                                                className="avatar rounded mr-1"
                                                                                src="../../assets/images/demo/user-2.jpg"
                                                                                alt="placeholder"
                                                                            />
                                                                            <div className="media-body">
                                                                                <span className="mt-0">
                                                                                    Michael
                                                                                    Doe
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 text-right">
                                                                        <small className="text-mute">
                                                                            2
                                                                            hours
                                                                            ago
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body overflow-hidden">
                                                                <blockquote className="blockquote">
                                                                    <p className="mb-0">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipiscing
                                                                        elit.
                                                                        Integer
                                                                        posuere
                                                                        erat a
                                                                        ante.
                                                                    </p>
                                                                    <footer className="blockquote-footer">
                                                                        Someone
                                                                        famous
                                                                        in{" "}
                                                                        <cite title="Source Title">
                                                                            Source
                                                                            Title
                                                                        </cite>
                                                                    </footer>
                                                                </blockquote>
                                                            </div>
                                                            <div className="card-footer">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <a
                                                                            href="/"
                                                                            className="btn btn-ico btn-sm rounded btn-outline-light text-red"
                                                                        >
                                                                            <i className="icon-heart2 fs-22"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col text-right">
                                                                        <div className="dropdown">
                                                                            <a
                                                                                className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                                href="/"
                                                                                role="button"
                                                                                id="dropdownMenuLink-2"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="icon-more-vertical fs-22"></i>
                                                                            </a>

                                                                            <div
                                                                                className="dropdown-menu"
                                                                                aria-labelledby="dropdownMenuLink-2"
                                                                            >
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Make
                                                                                    Primary
                                                                                </a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane"
                                        id="demo-2-2"
                                        role="tabpanel"
                                        aria-labelledby="demo-2-2"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row gutter-1">
                                                    <div className="col-md-4">
                                                        <figure className="user">
                                                            <a
                                                                href="/"
                                                                className="user-photo"
                                                            >
                                                                <img
                                                                    src="../../assets/images/demo/user-1.jpg"
                                                                    alt="Avatar"
                                                                />
                                                            </a>
                                                            <figcaption className="user-caption">
                                                                <h4>
                                                                    John Doe
                                                                </h4>
                                                                <span>
                                                                    Senior
                                                                    Designer
                                                                </span>
                                                                <ul className="socials bordered">
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-facebook fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-instagram fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-twitter fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <figure className="user">
                                                            <a
                                                                href="/"
                                                                className="user-photo"
                                                            >
                                                                <img
                                                                    src="../../assets/images/demo/user-2.jpg"
                                                                    alt="Avatar"
                                                                />
                                                            </a>
                                                            <figcaption className="user-caption">
                                                                <h4>
                                                                    James Doe
                                                                </h4>
                                                                <span>
                                                                    Senior
                                                                    Designer
                                                                </span>
                                                                <ul className="socials bordered">
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-facebook fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-instagram fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-twitter fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <figure className="user">
                                                            <a
                                                                href="/"
                                                                className="user-photo"
                                                            >
                                                                <img
                                                                    src="../../assets/images/demo/user-3.jpg"
                                                                    alt="Avatar"
                                                                />
                                                            </a>
                                                            <figcaption className="user-caption">
                                                                <h4>
                                                                    Valerie Doe
                                                                </h4>
                                                                <span>
                                                                    Senior
                                                                    Designer
                                                                </span>
                                                                <ul className="socials bordered">
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-facebook fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-instagram fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="/"
                                                                            className="icon-twitter fs-20"
                                                                        >
                                                                            Test
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row gutter-1">
                                                    <div className="col-12">
                                                        <div className="boxed p-2">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-10">
                                                                    <div className="media align-items-center">
                                                                        <img
                                                                            src="../../assets/images/demo/user-5.jpg"
                                                                            alt="Avatar"
                                                                            className="avatar avatar-lg rounded mr-3"
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5 className="mb-0">
                                                                                Nicole
                                                                                Doe
                                                                            </h5>
                                                                            <span className="text-muted">
                                                                                Senior
                                                                                UI
                                                                                Designer
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-3"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-3"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="boxed p-2">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-10">
                                                                    <div className="media align-items-center">
                                                                        <img
                                                                            src="../../assets/images/demo/user-2.jpg"
                                                                            alt="Avatar"
                                                                            className="avatar avatar-lg rounded mr-3"
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5 className="mb-0">
                                                                                James
                                                                                Doe
                                                                            </h5>
                                                                            <span className="text-muted">
                                                                                Senior
                                                                                UI
                                                                                Designer
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-4"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-4"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="boxed p-2">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-10">
                                                                    <div className="media align-items-center">
                                                                        <img
                                                                            src="../../assets/images/demo/user-3.jpg"
                                                                            alt="Avatar"
                                                                            className="avatar avatar-lg rounded mr-3"
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5 className="mb-0">
                                                                                Violet
                                                                                Doe
                                                                            </h5>
                                                                            <span className="text-muted">
                                                                                Senior
                                                                                UI
                                                                                Designer
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-5"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-5"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="boxed p-2">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-10">
                                                                    <div className="media align-items-center">
                                                                        <img
                                                                            src="../../assets/images/demo/user-4.jpg"
                                                                            alt="Avatar"
                                                                            className="avatar avatar-lg rounded mr-3"
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5 className="mb-0">
                                                                                Valerie
                                                                                Doe
                                                                            </h5>
                                                                            <span className="text-muted">
                                                                                Senior
                                                                                UI
                                                                                Designer
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-6"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-6"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="boxed p-2">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-10">
                                                                    <div className="media align-items-center">
                                                                        <img
                                                                            src="../../assets/images/demo/user-6.jpg"
                                                                            alt="Avatar"
                                                                            className="avatar avatar-lg rounded mr-3"
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5 className="mb-0">
                                                                                Nick
                                                                                Doe
                                                                            </h5>
                                                                            <span className="text-muted">
                                                                                Senior
                                                                                UI
                                                                                Designer
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-7"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-7"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane"
                                        id="demo-2-3"
                                        role="tabpanel"
                                        aria-labelledby="demo-2-3"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row gutter-2">
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <div className="card-header mb-3">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img
                                                                            src="../../assets/images/demo/logo/logo-2.png"
                                                                            alt="placeholder"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <h3 className="fs-20 font-weight-normal">
                                                                    Project
                                                                    Title
                                                                </h3>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                </p>
                                                            </div>
                                                            <div className="card-footer separator-top pt-3">
                                                                <div className="row align-items-center">
                                                                    <div className="col-8">
                                                                        <ul className="user-list">
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-1.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="John Doe"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-4.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Valerie Lucien"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-5.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Ann Campbel"
                                                                                />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <div className="dropdown">
                                                                            <a
                                                                                className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                                href="/"
                                                                                role="button"
                                                                                id="dropdownMenuLink-8"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="icon-more-vertical fs-22"></i>
                                                                            </a>

                                                                            <div
                                                                                className="dropdown-menu"
                                                                                aria-labelledby="dropdownMenuLink-8"
                                                                            >
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Make
                                                                                    Primary
                                                                                </a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <div className="card-header mb-3">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img
                                                                            src="../../assets/images/demo/logo/logo-3.png"
                                                                            alt="placeholder"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <h3 className="fs-20 font-weight-normal">
                                                                    Project
                                                                    Title
                                                                </h3>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                </p>
                                                            </div>
                                                            <div className="card-footer separator-top pt-3">
                                                                <div className="row align-items-center">
                                                                    <div className="col-8">
                                                                        <ul className="user-list">
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-1.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="John Doe"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-4.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Valerie Lucien"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-5.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Ann Campbel"
                                                                                />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <div className="dropdown">
                                                                            <a
                                                                                className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                                href="/"
                                                                                role="button"
                                                                                id="dropdownMenuLink-9"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="icon-more-vertical fs-22"></i>
                                                                            </a>

                                                                            <div
                                                                                className="dropdown-menu"
                                                                                aria-labelledby="dropdownMenuLink-9"
                                                                            >
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Make
                                                                                    Primary
                                                                                </a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <div className="card-header mb-3">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img
                                                                            src="../../assets/images/demo/logo/logo-5.png"
                                                                            alt="placeholder"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <h3 className="fs-20 font-weight-normal">
                                                                    Project
                                                                    Title
                                                                </h3>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                </p>
                                                            </div>
                                                            <div className="card-footer separator-top pt-3">
                                                                <div className="row align-items-center">
                                                                    <div className="col-8">
                                                                        <ul className="user-list">
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-1.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="John Doe"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-4.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Valerie Lucien"
                                                                                />
                                                                            </li>
                                                                            <li>
                                                                                <img
                                                                                    src="../../assets/images/demo/user-5.jpg"
                                                                                    alt=""
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    title="Ann Campbel"
                                                                                />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <div className="dropdown">
                                                                            <a
                                                                                className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                                href="/"
                                                                                role="button"
                                                                                id="dropdownMenuLink-10"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="icon-more-vertical fs-22"></i>
                                                                            </a>

                                                                            <div
                                                                                className="dropdown-menu"
                                                                                aria-labelledby="dropdownMenuLink-10"
                                                                            >
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Make
                                                                                    Primary
                                                                                </a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    href="/"
                                                                                >
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane"
                                        id="demo-2-4"
                                        role="tabpanel"
                                        aria-labelledby="demo-2-4"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <div className="boxed">
                                                            <div className="row align-items-center justify-content-between p-3">
                                                                <div className="col-md-2 pb-2 pb-md-0 text-center">
                                                                    <img
                                                                        src="../../assets/images/demo/user-5.jpg"
                                                                        alt="Avatar"
                                                                        className="avatar avatar-lg rounded"
                                                                    />
                                                                </div>
                                                                <div className="col-md-5 text-center text-md-left">
                                                                    <h4 className="mb-0">
                                                                        <b>
                                                                            Valerie
                                                                        </b>{" "}
                                                                        Doe
                                                                    </h4>
                                                                    <a
                                                                        href="/"
                                                                        className="fs-14 link text-primary"
                                                                    >
                                                                        Change
                                                                        Avatar
                                                                    </a>
                                                                </div>
                                                                <div className="col-md-4 text-center text-md-right mt-1 mt-md-0">
                                                                    <a
                                                                        href="/"
                                                                        className="btn btn-primary btn-rounded"
                                                                    >
                                                                        Upgrade
                                                                        Plan
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            General Information
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="firstName">
                                                                            First
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="firstName"
                                                                            aria-describedby="firstName"
                                                                            placeholder="John"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="secondName">
                                                                            Second
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="secondName"
                                                                            aria-describedby="secondName"
                                                                            placeholder="Doe"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userMail">
                                                                            Email
                                                                            address
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userMail"
                                                                            aria-describedby="userMail"
                                                                            placeholder="johndoe@example.com"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 align-items-center">
                                                                <div className="col-3">
                                                                    <button className="btn btn-secondary">
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            Profile Information
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userCity">
                                                                            City
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userCity"
                                                                            aria-describedby="userCity"
                                                                            placeholder="New York"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userCountry">
                                                                            Country
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="userCountry"
                                                                            aria-describedby="userCountry"
                                                                            placeholder="United States"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="userTwitter">
                                                                            Twitter
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text">
                                                                                    @
                                                                                </span>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                id="userTwitter"
                                                                                className="form-control"
                                                                                placeholder="Username"
                                                                                aria-label="Username"
                                                                                aria-describedby="userTwitter"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleFormControlTextarea1">
                                                                            About
                                                                        </label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="exampleFormControlTextarea1"
                                                                            rows="3"
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-3">
                                                                    <button className="btn btn-secondary">
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane"
                                        id="demo-2-5"
                                        role="tabpanel"
                                        aria-labelledby="demo-2-5"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="boxed p-3">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-3 col-md-2">
                                                                    <img
                                                                        src="../../assets/images/demo/stock/mastercard.png"
                                                                        alt="placeholder"
                                                                    />
                                                                </div>
                                                                <div className="col-7 col-md-5">
                                                                    <h5 className="fs-18 font-weight-normal mb-0">
                                                                        ••••
                                                                        ••••
                                                                        ••••
                                                                        7041
                                                                    </h5>
                                                                    <small>
                                                                        Exp:
                                                                        08/20
                                                                    </small>
                                                                </div>
                                                                <div className="col-2 col-md-4 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-11"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-11"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="boxed p-3 mt-1">
                                                            <div className="row align-items-center justify-content-between">
                                                                <div className="col-3 col-md-2">
                                                                    <img
                                                                        src="../../assets/images/demo/stock/visa.png"
                                                                        alt="placeholder"
                                                                    />
                                                                </div>
                                                                <div className="col-7 col-md-5">
                                                                    <h5 className="fs-18 font-weight-normal mb-0">
                                                                        ••••
                                                                        ••••
                                                                        ••••
                                                                        7041
                                                                    </h5>
                                                                    <small>
                                                                        Exp:
                                                                        08/20
                                                                    </small>
                                                                </div>
                                                                <div className="col-2 col-md-4 text-md-right">
                                                                    <div className="dropdown">
                                                                        <a
                                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                                            href="/"
                                                                            role="button"
                                                                            id="dropdownMenuLink-12"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="icon-more-vertical fs-22"></i>
                                                                        </a>

                                                                        <div
                                                                            className="dropdown-menu"
                                                                            aria-labelledby="dropdownMenuLink-12"
                                                                        >
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Make
                                                                                Primary
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="/"
                                                                            >
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row align-items-center mb-2">
                                                    <div className="col-lg-6 text-center text-lg-left">
                                                        <h3 className="fs-22 font-weight-normal">
                                                            New Payment Method
                                                        </h3>
                                                    </div>
                                                    <div className="col-lg-6 text-center text-lg-right mt-1 mt-lg-0">
                                                        <div className="nav nav-switch">
                                                            <a
                                                                className="nav-item nav-link active"
                                                                id="first-tab"
                                                                data-toggle="tab"
                                                                href="#pricing-first"
                                                            >
                                                                Credit Card
                                                            </a>
                                                            <a
                                                                className="nav-item nav-link"
                                                                id="second-tab"
                                                                data-toggle="tab"
                                                                href="#pricing-second"
                                                            >
                                                                Paypal
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div
                                                            className="tab-content"
                                                            id="myTabContent-2"
                                                        >
                                                            <div
                                                                className="tab-pane show active"
                                                                id="pricing-first"
                                                                role="tabpanel"
                                                                aria-labelledby="first-tab"
                                                            >
                                                                <div className="boxed p-3">
                                                                    <form>
                                                                        <div className="form-row mb-1">
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-minimal"
                                                                                    placeholder="Name on card"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row mb-1">
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-minimal"
                                                                                    placeholder="0000-0000-0000-0000"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row mb-1">
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-minimal"
                                                                                    placeholder="MM/YY"
                                                                                />
                                                                            </div>
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-minimal"
                                                                                    placeholder="CVV"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row mt-3">
                                                                            <div className="col">
                                                                                <button className="btn btn-primary">
                                                                                    Add
                                                                                    Card
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="tab-pane"
                                                                id="pricing-second"
                                                                role="tabpanel"
                                                                aria-labelledby="second-tab"
                                                            >
                                                                <div className="boxed p-3">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col-8">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control form-control-minimal"
                                                                                    placeholder="Paypal Mail"
                                                                                />
                                                                            </div>
                                                                            <div className="col-4">
                                                                                <button className="btn btn-primary btn-block">
                                                                                    Subscribe
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="table-responsive-md">
                                                            <table className="table table-lined">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            Date
                                                                        </th>
                                                                        <th scope="col">
                                                                            Order
                                                                        </th>
                                                                        <th scope="col">
                                                                            Price
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            July
                                                                            20,
                                                                            2018
                                                                        </th>
                                                                        <td>
                                                                            #110
                                                                        </td>
                                                                        <td>
                                                                            $8021.47
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            July
                                                                            20,
                                                                            2018
                                                                        </th>
                                                                        <td>
                                                                            #111
                                                                        </td>
                                                                        <td>
                                                                            $8021.47
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            July
                                                                            22,
                                                                            2018
                                                                        </th>
                                                                        <td>
                                                                            #112
                                                                        </td>
                                                                        <td>
                                                                            $815
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Button
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSandbox;

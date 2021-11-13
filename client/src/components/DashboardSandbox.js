import { useDispatch, useSelector } from "react-redux";
const DashboardSandbox = () => {
    const user = useSelector((state) => state.loggedInUser);
    const bgColor = "#3c66ff";
    return (
        <section style={{ backgroundColor: bgColor }} className="pb-5 pt-5">
            <div style={{ backgroundColor: bgColor, height: "5rem" }}></div>
            <div class="d-flex justify-content-center flex-nowrap mb-1 row">
                <div class="card bg-light col-8">
                    <div class="mt-n3"></div>
                    <div class="mt-n10 mb-6">
                        <div class="card-body p-0 mt-n10">
                            <div class="p-0 mt-n10">
                                <div class="container mt-n10">
                                    <div class="row justify-content-center align-items-end vh-50 mb-5 mt-n10">
                                        <div class="col-4 col-md-10 col-lg-8 mt-n10">
                                            <div class="row align-items-center">
                                                <div class="col-4 col-lg-3">
                                                    <img
                                                        class="mr-3 avatar avatar-xl rounded"
                                                        src="../../assets/images/demo/user-2.jpg"
                                                        alt="Generic placeholder"
                                                    />
                                                </div>

                                                <div class="col">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-8">
                                                            <h2 class="mb-0">
                                                                <b>
                                                                    {
                                                                        user.username
                                                                    }
                                                                </b>
                                                            </h2>
                                                            {/* <span class="text-muted">
                                                            Senior Visual
                                                            Designer
                                                        </span> */}
                                                        </div>
                                                        {/* <div class="col-md-4 text-left text-md-right">
                                                        <button
                                                            type="button"
                                                            class="btn btn-rounded btn-ico btn-white"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Add Friend"
                                                        >
                                                            <i class="icon-plus2 fs-20"></i>
                                                        </button>
                                                    </div> */}
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
                                                    Feedback
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    data-toggle="tab"
                                                    href="#demo-2-3"
                                                >
                                                    Example #3
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
                                                                            erat
                                                                            a
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
                                                                        James
                                                                        Doe
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
                                                                        Valerie
                                                                        Doe
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
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
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
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
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
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
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
            </div>
        </section>
    );
};

export default DashboardSandbox;

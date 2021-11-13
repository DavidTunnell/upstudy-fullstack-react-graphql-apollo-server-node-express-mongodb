import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
const DashboardSandbox = () => {
    const user = useSelector((state) => state.loggedInUser);
    const bgColor = "#3c66ff";
    return (
        <section
            style={{ backgroundColor: bgColor }}
            className="pb-5 pt-5 viewport"
        >
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
                                                <div className="col-md-12 col-lg-12">
                                                    <Profile />
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
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="table-responsive-md">
                                                                <table class="table table-lined">
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

                                        <div
                                            className="tab-pane"
                                            id="demo-2-3"
                                            role="tabpanel"
                                            aria-labelledby="demo-2-3"
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-md-10 col-lg-8">
                                                    Example #3 Panel
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

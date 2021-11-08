const Categories = () => {
    return (
        <>
            <section className="m-10">
                <div className="container">
                    {/* <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>
                                Our <b>Teachers</b>
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Obcaecati maiores quo autem
                                voluptate sequi expedita iure atque, aut,
                                inventore cupiditate fuga.
                            </p>
                        </div>
                    </div> */}
                    <div className="row">
                        <ul className="user-grid gutter-1">
                            <li>
                                <figure className="user">
                                    <div className="user-photo expand">
                                        <img
                                            src="../../assets/images/demo/user-1.jpg"
                                            alt="Avatar"
                                        />
                                    </div>
                                </figure>
                            </li>
                            <li>
                                <figure className="user">
                                    <div className="user-photo expand">
                                        <img
                                            src="../../assets/images/demo/user-2.jpg"
                                            alt="Avatar"
                                        />
                                    </div>
                                </figure>
                            </li>
                            {/* <li>
                                <a href="" className="anchor rounded">
                                    <span>
                                        <i className="icon-arrow-right2"></i>
                                    </span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Categories;

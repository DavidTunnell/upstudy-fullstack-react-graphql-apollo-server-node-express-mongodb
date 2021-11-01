import { skills } from "../utils/data";

const Skills = () => {
    const styles = {
        graphics: {
            height: "100px",
            width: "100px",
        },
    };
    return (
        <>
            <section className="bg-white">
                <div className="container pt-4 pb-4">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 text-md-center mobile-center">
                            <h2>
                                Skills and{" "}
                                <span className="font-weight-bold">
                                    Technologies
                                </span>
                            </h2>
                            <p>Never stop learning.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col partners align-items-center">
                            <div
                                className="owl-carousel"
                                data-items="[6,4,2]"
                                data-loop="true"
                                data-autoplay="true"
                            >
                                {skills.map((element) => (
                                    <div key={element.id}>
                                        <div className="logo">
                                            <img
                                                src={element.graphic}
                                                alt={element.title}
                                                style={styles.graphics}
                                            />
                                        </div>
                                        <div className="mt-3 text-muted">
                                            {element.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;

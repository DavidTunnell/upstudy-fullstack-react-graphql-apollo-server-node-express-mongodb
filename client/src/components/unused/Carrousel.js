import { carrouselCards } from "../utils/data";

const Portfolio = () => {
    const styles = {
        preventRunoff: { overflow: "hidden" },
    };
    return (
        <>
            <section
                className="section-decorated-bottom pt-0"
                style={styles.preventRunoff}
            >
                <div className="container">
                    <div
                        className="row"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <div className="col">
                            <div
                                className="owl-carousel visible"
                                data-items="[3,2,1]"
                                data-margin="20"
                                data-dots="true"
                                data-loop="true"
                                data-center="true"
                            >
                                {carrouselCards.map((element) => (
                                    <article
                                        className="tile tile-long"
                                        key={element.id}
                                    >
                                        <div
                                            className="tile-image"
                                            style={{
                                                backgroundImage: `url(${element.image})`,
                                            }}
                                        ></div>
                                        <a href="/" className="tile-content">
                                            <div className="tile-header on-hover text-right">
                                                <h4 className="fs-30 text-white">
                                                    {element.topRight}
                                                </h4>
                                            </div>
                                            <div className="tile-footer">
                                                <span className="eyebrow">
                                                    {element.flavor}
                                                </span>
                                                <h3>{element.title}</h3>
                                            </div>
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;

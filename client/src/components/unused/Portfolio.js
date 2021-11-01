import { portfolio } from "../../utils/data";
import PortfolioModal from "./PortfolioModal";
import { useState } from "react";
import { badges } from "../../utils/data";

const PortfolioAlt = () => {
    const [projectData, setProjectData] = useState(null);

    const handlePortfolioCardClick = (event) => {
        const clickedProjectsId =
            event.target.closest(".portfolio-card").dataset.id;
        const selectedProjectData = portfolio.find(
            (x) => x.id === parseInt(clickedProjectsId)
        );
        selectedProjectData.techSkillsData = getBadges(
            selectedProjectData.techSkills
        );
        setProjectData(selectedProjectData);
    };

    const getBadges = (arr) => {
        const returnArray = [];
        arr.forEach((element) => {
            returnArray.push(badges.find((x) => x.id === element));
        });
        return returnArray;
    };

    return (
        <>
            <section className="bg-light pt-9 pb-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 text-md-center">
                            <h2>Projects / Portfolio</h2>
                            <p>
                                Some app demos may be asleep and take a few
                                moments to spin up before loading.
                            </p>
                        </div>
                    </div>
                    <div className="row gutter-1 gutter-md-3 demo-preview">
                        {portfolio.map((element) => (
                            <div
                                className="col-6 col-lg-4 portfolio-card"
                                key={element.id}
                                data-id={element.id}
                                onClick={(event) => {
                                    handlePortfolioCardClick(event);
                                }}
                            >
                                <article className="card card-minimal">
                                    <summary
                                        href={element.url}
                                        className="card-img-container"
                                        data-toggle="modal"
                                        data-target="#project-modal"
                                    >
                                        <img
                                            className="card-img"
                                            src={element.image}
                                            alt={element.title}
                                        />
                                    </summary>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            <a href={element.url}>
                                                {element.title}
                                            </a>
                                        </h5>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {projectData && <PortfolioModal projectData={projectData} />}
        </>
    );
};

export default PortfolioAlt;

import React from "react";
import Project from "../../components/Project";
import projects from "../../projects.json";

function Portfolio() {
    return(
        // <!--main containing 5 cards that showccase my portfolio so far-->
        <main className="container">
            <section className="row justify-content-md-center">
                <div className="col-md-8 ceruleanText bg-light">
                    <h1 className="border-bottom border-dark py-2">My Portfolio</h1>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light">
                    <div className="card-deck">
                        <Project 
                            id={projects[0].id}
                            key={projects[0].id}
                            imgSrc={projects[0].image}
                            title={projects[0].name}
                            repository={projects[0].repo}
                            deployed={projects[0].deploy}
                        />
                        <Project 
                            id={projects[1].id}
                            key={projects[1].id}
                            imgSrc={projects[1].image}
                            title={projects[1].name}
                            repository={projects[1].repo}
                            deployed={projects[1].deploy}
                        />
                    </div>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light">
                    <div className="card-deck">
                        <Project 
                            id={projects[2].id}
                            key={projects[2].id}
                            rowInfo="additionalRow"
                            imgSrc={projects[2].image}
                            title={projects[2].name}
                            repository={projects[2].repo}
                            deployed={projects[2].deploy}
                        />
                        <Project 
                            id={projects[3].id}
                            key={projects[3].id}
                            rowInfo="additionalRow"
                            imgSrc={projects[3].image}
                            title={projects[3].name}
                            repository={projects[3].repo}
                            deployed={projects[3].deploy}
                        />
                    </div>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light">
                    <div className="card-deck">
                        <Project 
                            id={projects[4].id}
                            key={projects[4].id}
                            rowInfo="additionalRow"
                            imgSrc={projects[4].image}
                            title={projects[4].name}
                            repository={projects[4].repo}
                            deployed={projects[4].deploy}
                        />
                        <Project 
                            id={projects[5].id}
                            key={projects[5].id}
                            rowInfo="additionalRow"
                            imgSrc={projects[5].image}
                            title={projects[5].name}
                            repository={projects[5].repo}
                            deployed={projects[5].deploy}
                        />
                    </div>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light">
                    <Project 
                        id={projects[6].id}
                        key={projects[6].id}
                        rowInfo="lastRow"
                        imgSrc={projects[6].image}
                        title={projects[6].name}
                        repository={projects[6].repo}
                        deployed={projects[6].deploy}
                    />
                </div>
            </section>
        </main>
    );
}

export default Portfolio;

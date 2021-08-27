import React from "react";
import Myself from "./me/myself.jpg";
import EBResume from "./resume/Emmalee Barnett's Resume.doc.pdf";

function About() {
    return(
        // <!--main containing the about me information-->
        <main className="container">
            <section className="row justify-content-md-center">
                <div className="col-md-8 ceruleanText bg-light">
                    <h1 className="border-bottom border-dark py-2">About Me</h1>
                    <a className="d-block btn cerulean rounded-0 text-light" target="_blank" rel="noopener noreferrer" href={EBResume}>Resumé</a>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-4 bg-light py-2">
                    <img src={Myself} className="img-fluid" alt="headshot of me"/>
                </div>
                <div className="col-md-4 bg-light pt-4 text-center">
                    <p className="pt-4">
                        Full-stack web developer with a certificate in Full Stack Web Development from The Johns Hopkins University. 
                        During certificate coursework, acquired experience in multiple web development-related areas (see Technical Skills via clicking Resumé). 
                        Worked on several projects (see My Portfolio tab) both individually and as part of a team. 
                        Career history of sharing knowledge through training and increasing responsibility with managerial tasks and data management. 
                        Passionate about web development with an attention to detail and positive user experience.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default About;

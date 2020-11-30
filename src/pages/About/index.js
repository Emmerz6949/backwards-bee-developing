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
                    <p>Full-stack web developer with a certificate from Johns Hopkins University. During my time earning the certificate I acquired skills in the following: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL, Command Line, Git, and more. I also worked on many projects both individually and as part of a team (explore the "My Portfolio" page). Known to be a team player and passionate about web development. I created my first website when I was in high school, and loved it instantly. Since then I wanted to learn more and more to be able to create bigger and better sites.</p>
                </div>
            </section>
        </main>
    );
}

export default About;

import React from "react";

function Contact() {
    return(
        // <!--main containing contact info-->
        <main id="contactContain" className="ceruleanText container">
            <section className="row justify-content-md-center">
                <div className="col-md-8 ceruleanText bg-light">
                    <h1 className="border-bottom border-dark py-2">Contact Me</h1>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light py-4">
                    <h5>GitHub Page: <a target="_blank" rel="noopener noreferrer" href="https://github.com/Emmerz6949">Emmerz6949</a></h5>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light py-4">
                    <h5>LinkedIn Page: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emmalee-barnett-49900063/">Emmalee Barnett</a></h5>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light py-4">
                    <h5>Email Address: emmerz6949@gmail.com</h5>
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className="col-md-8 bg-light py-4">
                    <h5>Phone Number: (706) 538-8537‬</h5>
                </div>
            </section>
        </main>
    );
}

export default Contact;

import React from 'react';

function Header(props) {
    return(
        // <!--header containing navigation bar-->
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark cerulean">
                <h1 className="navbar-brand mb-0"><a className="text-decoration-none text-reset" href="../index.html">Emmalee Barnett</a></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} href="/" onClick={() => props.handlePageChange("Home")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={props.currentPage === "About Me" ? "nav-link active" : "nav-link"} href="/about" onClick={() => props.handlePageChange("About Me")}>About Me</a>
                        </li>
                        <li className="nav-item active">
                            <a className={props.currentPage === "My Portfolio" ? "nav-link active" : "nav-link"} href="/portfolio" onClick={() => props.handlePageChange("My Portfolio")}>My Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={props.currentPage === "Contact Me" ? "nav-link active" : "nav-link"} href="/contact" onClick={() => props.handlePageChange("Contact Me")}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

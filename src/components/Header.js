import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation();

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
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>My Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

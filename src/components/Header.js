import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation();

    return(
        // <!--header containing navigation bar-->
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark cerulean">
                <h1 className="navbar-brand mb-0"><Link to="/backwards-bee-developing/" className="text-decoration-none text-reset">Backwards Bee Developing</Link></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/backwards-bee-developing/" className={location.pathname === "/backwards-bee-developing/" ? "nav-link active" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/backwards-bee-developing/about" className={location.pathname === "/backwards-bee-developing/about" ? "nav-link active" : "nav-link"}>About Me</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/backwards-bee-developing/portfolio" className={location.pathname === "/backwards-bee-developing/portfolio" ? "nav-link active" : "nav-link"}>My Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/backwards-bee-developing/contact" className={location.pathname === "/backwards-bee-developing/contact" ? "nav-link active" : "nav-link"}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

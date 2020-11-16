import React from 'react';

function Header() {
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
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Me</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/portfolio">My Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

import React from 'react';

function Header() {
    return(
        // <!--header containing navigation bar-->
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark cerulean">
                <h1 class="navbar-brand mb-0"><a class="text-decoration-none text-reset" href="../index.html">Emmalee Barnett</a></h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Me</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/portfolio">My Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;

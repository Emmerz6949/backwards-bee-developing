import React from "react";

function Home() {
    return(
        // <!--main containing the homeCard-->
        <main>
            <div id="homeCard" className="card d-block mx-auto h-50 w-50 text-center">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img-top h-100 w-100" src="https://i.ibb.co/2KjRTQ3/eeb9.png" alt="E.E.B. in a cursive font"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body h-100 w-100">
                            <h3 className="card-title">Hi, I'm Emmalee Barnett!</h3>
                            <h4 className="card-text pt-2">Full-Stack Web Developer</h4>
                            <h5 className="card-text pt-4">Feel free to use the navigation bar to peruse the site! <span role="img" aria-label="Grinning Face With Open Mouth">&#x1F603;</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;

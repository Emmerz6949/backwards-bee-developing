import React from 'react';

function Project(props) {
    let classN = `card text-center text-light bg-dark bord my-2 ${props.rowInfo}`;
    
    return(
        <div className={classN}>
            <img src={props.imgSrc} className="card-img-top bord" alt="screenshot of the main page for this site"/>
            <div className="card-body bord">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.repository} target="_blank" rel="noopener noreferrer" className="btn cerulean text-light rounded-0 m-1">Repository</a>
                <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="btn cerulean text-wrap text-light rounded-0 m-1">Deployed Site</a>
            </div>
        </div>
    );
}

export default Project;

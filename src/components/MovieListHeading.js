import React from "react";

function MovieListHeading(props) {
    return (
        <div className="col mt-4">
            <img src={props.logo} alt='logo' className="logo"></img>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading;
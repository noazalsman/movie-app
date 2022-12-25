import React from "react";

function Description(props) {
    return (props.trigger) ? (
        <>
            <div className='image-container d-flex justify-content-start m-3'>
                <div className="popup">
                    <div className="popup-inner">
                        <p>Title: {props.discMovie.Title}</p>
                        <p>Year: {props.discMovie.Year}</p>
                        <p>imdbID: {props.discMovie.imdbID}</p>
                        <p>Type: {props.discMovie.Type}</p>
                        <button className="close-btn" onClick={() => props.setButtonPopup(false)}>X</button>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}

export default Description;

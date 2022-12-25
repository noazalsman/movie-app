import React from "react";

function MovieList(props) {
    const FavoriteComp = props.favoriteComp;
    return (
        <>
            {props.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie' onClick={() => {
                    props.setButtonPopup(true)
                    props.setDiscMovie(movie)
                    }}></img>
                <div 
                    onClick={() => props.handleFavoritesClick(movie)}
                    className="overlay d-flex align-items-center justify-content-center"
                >
                    <FavoriteComp />
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieList;
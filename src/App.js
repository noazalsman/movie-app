import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import Description from "./components/Description";
import logo from './data/logo.png';
import logo2 from './data/heart.png';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('pulp');
  const [favorites, setFavorites] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [discMovie, setDiscMovie] = useState();

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4fd210c5`
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));
    setFavorites(movieFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  
  return (
    <div className="container-fluid movie-app">
      <div className="header">
        <MovieListHeading heading="My Movie Website" logo={logo}/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList 
          movies={movies}
          setButtonPopup={setButtonPopup}
          setDiscMovie={setDiscMovie}
          favoriteComp={AddFavorites}
          handleFavoritesClick={addFavoriteMovie}
        />
      </div>
      <div className="header">
        <MovieListHeading heading="My Favorites" logo={logo2}/>
      </div>
      <div className="row">
        <MovieList 
          movies={favorites} 
          favoriteComp={RemoveFavorites} 
          handleFavoritesClick={removeFavoriteMovie}
        />
      </div>
      <Description 
        trigger={buttonPopup} 
        setButtonPopup={setButtonPopup} 
        discMovie={discMovie}
        >
      </Description>
    </div>
  );
};

export default App;

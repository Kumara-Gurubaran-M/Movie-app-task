import React, { useEffect, useState } from 'react';
import Movielist from './component/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovielistHeading from './component/MovielistHeading';
import SearchBox from './component/SearchBox';
import AddFavourites from './component/AddFavourites';
import Removefavourites from './component/Removefavourites';


function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('')



  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=7a60fcac`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );


    setFavourites(movieFavourites);

  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };



  return (
    <div className="container-fluid movie-app ">
      <div className=' row d-flex align-items-center pt-4 mb-4'>
        <MovielistHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <Movielist movies={movies} handlefavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovielistHeading heading='Favourites' />
      </div>
      <div className='row'>
        <Movielist
          movies={favourites}
          handlefavouritesClick={removeFavouriteMovie}
          favouriteComponent={Removefavourites}
        />
      </div>



    </div>
  );
}

export default App;

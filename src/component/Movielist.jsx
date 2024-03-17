import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const { movies } = props;

	if (!movies) {
		return null;
	  }

	return (
		<>
			{props.movies.map((movie) => (
  <div key={movie.imdbID} className='image-container d-flex flex-column justify-content-center align-items-center m-3'>
    <div>
      <p><span>Title: </span>{movie.Title}</p>
      <div className='d-flex justify-content-between'>
        <p><span>Year: </span>{movie.Year}</p>
        <p><span>Type: </span>{movie.Type}</p>
      </div>
      <p><span>IMDB-ID: </span>{movie.imdbID}</p>
      <img src={movie.Poster} alt='movie' />
    </div>
    <div
      onClick={() => props.handlefavouritesClick(movie)}
      className='overlay d-flex align-items-center justify-content-center'
    >
      <FavouriteComponent />
    </div>
  </div>
))}

		</>
	);
};

export default MovieList;

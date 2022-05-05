import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='movie-list quarter'>
      {props.movies.map(movie => 
        <Movie 
          key={movie.id} 
          movie={movie} 
          handleDeleteMovie={props.handleDeleteMovie} 
        />
      )}
    </div>
  );
}
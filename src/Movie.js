import React from 'react';

export default function Movie(props) {
  return (
    <div style={{ backgroundColor: props.movie.color }}
      className='movie' 
      onClick={() => props.handleDeleteMovie && props.handleDeleteMovie(props.movie.name)}>
      <h3>{props.movie.name}</h3>  
      <p>Directed by: {props.movie.director}</p>
      <p>Date Released: {props.movie.releaseDate}</p>
    </div>
  );
}
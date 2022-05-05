import React, { useState, useEffect } from 'react';

export default function MovieForm({ submitMovie, onMovieChange }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    onMovieChange(movie);
  }, [movie, onMovieChange]);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMovie(movie);
  };

  return (
    <div className='movie-form-container quarter'>
      <form onSubmit={handleSubmit} className='movie-form'>
        <label>
            Title
          <input required onChange={e => setMovie({ ...movie, name: e.target.value })} value={movie.name || ''} />
        </label>
        <label>
            Movie Director
          <input required onChange={e => setMovie({ ...movie, director: e.target.value })} value={movie.director || ''} />
        </label>
        <label>
            Release Date
          <input required type="number" onChange={e => setMovie({ ...movie, releaseDate: e.target.value })} value={movie.releaseDate || ''} />
        </label>
        <label>
            Color 
          <select required onChange={e => setMovie({ ...movie, color: e.target.value })} value={movie.color || ''}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>  
    </div>
  );
}
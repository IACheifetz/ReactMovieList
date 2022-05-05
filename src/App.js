import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState({ name: '', director: '', releaseDate: '', color: '' });
  
  function submitMovie(movie) {
    const newMovie = {
      ...movie,
      id: Math.ceil(Math.random() * 9999999),
    };
    setAllMovies([...allMovies, newMovie]);
  }

  function handleDeleteMovie(name) {
    const movieIndex = allMovies.findIndex(movie => movie.name === name);
    allMovies.splice(movieIndex, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const lessMovies = allMovies.filter(movie => movie.name.includes(search));
    search ? setFilteredMovies(lessMovies) : setFilteredMovies(allMovies);
  }


  return (
    <div className="App">
      <div className='current-movie quarter'>
        <Movie movie={currentMovie}/>
      </div>
      <div className='movie-filter quarter'>
        Filter Titles
        <input onChange={(e) => handleFilterMovies(e.target.value)} />
      </div>
      <MovieForm 
        submitMovie={submitMovie}
        onMovieChange={(movie) => setCurrentMovie(movie)}
      />
      <MovieList 
        movies={filteredMovies ? filteredMovies : allMovies} 
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
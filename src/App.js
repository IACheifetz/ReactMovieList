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

}

export default App;
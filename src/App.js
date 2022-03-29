import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e28acf7e4e2083e9c4a871b6f1666e4c";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_keye28acf7e4e2083e9c4a871b6f1666e4c&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;

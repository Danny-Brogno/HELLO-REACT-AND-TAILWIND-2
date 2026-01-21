import React, { useState, useEffect } from 'react';
import { Movie } from './sub-components/movie.jsx';
import { SelectSection } from './sub-components/selectSection.jsx';

export const Main = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetchMovies();
  },[])
  const fetchMovies = async()=>{  
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5f2bcf7b4089e10f6f5653b724f0559a");
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  }
  
  return (
    <main className="main">
      <SelectSection />
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 px-10">
      {movies.map((movie)=>(
          <Movie 
            key = {movie.id}
            id={movie.id}
            movie = {movie}
            title = {movie.title.slice(0,34)}
            rating = {movie.vote_average.toFixed(1)}
            description={movie.overview.slice(0,120)+".."}
            image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            releaseDate = {movie.release_date}
            originalLanguage = {movie.original_language}
          />
      ))}
      </div>
    </main>
  );
};

export default Main;
import React, { useState, useEffect } from 'react';
import { Movie } from './sub-components/movie.jsx';
import { SelectSection } from './sub-components/selectSection.jsx';

export const Main = () => {
  
  // API LOGIC
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetchMovies();
  },[])
  
  // FILTER LOGIC
  const [allMoviesFiltered, setAllMoviesFiltered] = useState([]);
  const [givingRating,setRating] = useState(0);
  
  // API CALL
  const fetchMovies = async()=>{  
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5f2bcf7b4089e10f6f5653b724f0559a");
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
    setAllMoviesFiltered(data.results);
  }
  
  // FILTER "CALL"
  const handleFilter = (rating)=> {
    if (rating == givingRating) {
      setRating(0);
      setMovies(allMoviesFiltered);
    } else {
      setRating(rating);
      const filteredMovies = allMoviesFiltered.filter((movie) => movie.vote_average >= rating);
      setMovies(filteredMovies);
    }
  }
  
  return (
    <main className="main">
      <SelectSection handleFilter={handleFilter} givingRating={givingRating}/>
      <div className="flex flex-row items-center justify-around flex-wrap mt-4 px-10">
        
        {
          movies.length > 0 ? (
            movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                movie={movie}
                title={movie.title.slice(0, 34)}
                rating={movie.vote_average.toFixed(1)}
                description={movie.overview.slice(0, 120) + ".."}
                image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                releaseDate={movie.release_date}
                originalLanguage={movie.original_language}
              />
            ))
          ) : (
            <p>No movies found matching that rating.</p>
          ) 
        }

      </div>
    </main>
  );
};

export default Main;
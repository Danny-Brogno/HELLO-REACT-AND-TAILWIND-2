import React from 'react';

export const Movie = ({id, image, rating, title, description, releaseDate, originalLanguage}) => { 
  
  
  return (
    <section className="movie-card border border-blue-500 p-4 rounded-lg mt-10 w-80 min-h-[30em]">
      <a href={`https://www.themoviedb.org/movie/${id}`} target="_blank" className="cursor-pointer">
        <img src={image} alt="image-here" className="border border-blue-500 w-full h-[20em] rounded-md mb-4" />
      </a>
      <div className="">
        <h2 className="text-2xl bold mb-4">{title}</h2>
        
        {/* Your UL and LI list inside each card */}
        <ul className="text-sm space-y-1 text-gray-300">
          <li><span className="font-bold text-yellow-500">Rating:</span> {rating}/10</li>
          <li><span className="font-bold text-blue-400">Original language:</span> {originalLanguage}</li>
          <li><span className="font-bold text-green-400">Released date:</span> {releaseDate}</li>
        </ul>
        
        <p className="text-sm mt-4 text-gray-400 italic">
          {description}
        </p>
      </div>
      
    </section>
  );
};
import React from 'react';

export const Movie = ({ image, rating, title, description }) => { 
  return (
    <section className="movie-card border border-blue-500 p-4 rounded-lg mt-4 w-80 font-montserrat">
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        
        {/* Your UL and LI list inside each card */}
        <ul className="text-sm space-y-1 text-gray-300">
          <li><span className="font-bold text-yellow-500">Rating:</span> {rating}/10</li>
          <li><span className="font-bold text-blue-400">Category:</span> Feature Film</li>
          <li><span className="font-bold text-green-400">Status:</span> Released</li>
        </ul>

        <p className="text-sm mt-4 text-gray-400 italic">
          {description}
        </p>
      </div>
      
    </section>
  );
};
import React from 'react';
import { Movie } from './sub-components/movie.jsx';
import { SelectSection } from './sub-components/selectSection.jsx';

export const Main = () => {
  return (
    <main className="main">
    <SelectSection />
        <div className="flex flex-row items-center justify-around flex-wrap mt-4 px-10">
          <Movie 
            title="MOVIE 1" 
            rating="8.5" 
            description="Testing our new sub-component folder." 
          />
        </div>
    </main>
  );
};

export default Main;
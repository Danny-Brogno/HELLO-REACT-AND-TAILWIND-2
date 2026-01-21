import React from 'react';

export const SelectSection = ({ handleFilter, givingRating }) => {
  return(
    
    <div className="flex justify-center mt-10 h-[5em]">

      <div className="flex flex-col justify-between mr-5">

        <h3 
          className={givingRating === 8 ? 'h3-element active cursor-pointer' : 'h3-element cursor-pointer hover:text-blue-700 transition-all duration-300'}
          onClick={() => handleFilter(8)}
          > 
          Select movies that have 8+ rating
        </h3>
        
        <h3 
          className={givingRating === 7 ? 'h3-element active cursor-pointer' : 'h3-element cursor-pointer hover:text-blue-700 transition-all duration-300'}
          onClick={() => handleFilter(7)}
          > 
          Select movies that have 7+ rating
        </h3>
        
        <h3 
          className={givingRating === 6 ? 'h3-element active cursor-pointer' : 'h3-element cursor-pointer hover:text-blue-700 transition-all duration-300'}
          onClick={() => handleFilter(6)}
          > 
          Select movies that have 6+ rating
        </h3>
        
      </div>
      
      <select
        name=""
        id=""
        defaultValue=""
        className="movie-sorting bg-purple-500 rounded p-4 h-full"
        >
        <option value="" disabled hidden>Select an option</option>
        <option value="">Sort by</option>
        <option value="">Date</option>
        <option value="">Rating</option>
      </select>

      <select
        name="sort"
        id="sort"
        defaultValue=""
        className="option bg-lime-500 rounded p-4 ml-4 h-full"
        >
        <option value="" disabled hidden>Select an option</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

    </div>
  )
}

export default SelectSection;
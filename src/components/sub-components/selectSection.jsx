import React from 'react';

export const SelectSection = () => {
  return (
    <div>
      <select
        name=""
        id=""
        className="movie-sorting bg-purple-500 rounded p-4"
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
        className="option bg-lime-500 rounded p-4 mt-4"
      >
        <option value="" disabled hidden>Select an option</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      
    </div>
  )
}

export default SelectSection;
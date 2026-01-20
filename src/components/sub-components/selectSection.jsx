import React from 'react';

export const SelectSection = () => {
  return (
    <div>
      <select
        name=""
        id=""
        className="movie-sorting bg-purple-500 rounded p-4"
      >
        <option value="" disabled selected hidden>Select an option</option>
        <option value="">Sort by</option>
        <option value="">Date</option>
        <option value="">Rating</option>
      </select>
      
      <select
        name=""
        id=""
        className="option bg-lime-500 rounded p-4 mt-4"
      >
        <option value="" disabled selected hidden>Select an option</option>
        <option value="">Ascending</option>
        <option value="">Descending</option>
      </select>
      
    </div>
  )
}

export default SelectSection;
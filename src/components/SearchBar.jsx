import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="searchBaarDiv">
        <input
          type="search"
          className="inputBox"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What do you want to play?"
          value={inputValue}
        />
        <i className="search_icon">
          <IoMdSearch />
        </i>
      </div>
      <div className="secondHeader" style={{marginTop:"20px"}}>
        <button className="active-option">All</button>
        <button>Pop</button>
        <button>Hip-Hop</button>
        <button>Rock</button>
        <button>Electronic</button>
      </div>
    </>
  );
}

export default SearchBar;

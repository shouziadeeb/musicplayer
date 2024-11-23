import React from "react";

function SearchBar() {
  return (
    <div className="searchBaar">
      {/* <div className="searchBaarDiv">
        <input type="search" className="inputBox" placeholder="What do you want to play?" />
        <i className="fa-solid fa-magnifying-glass sidebarBtn"></i>
      </div> */}
      <div className="secondHeader">
        <button className="active-option">All</button>
        <button>Music</button>
        <button>Podcast</button>
      </div>
    </div>
  );
}

export default SearchBar;

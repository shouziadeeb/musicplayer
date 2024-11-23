import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function Header({ isSearch }) {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  console.log(isSearch);
  return (
    <header className="header">
      <div className="rightHeader">
        {/* header image  */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbyRJ2hvTs2aHQapCeTZxUyo-7p2syxEK-g&s"
          className="LoginImgBtn"
          alt="User Profile"
        />
        <div
          className="searchBaarDiv"
          style={{ display: isSearch ? "flex" : "none" }}
        >
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
      </div>
    </header>
  );
}

export default Header;

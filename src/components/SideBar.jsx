import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Sidebar({ setIsSearch, isSearch }) {
  const list = [
    {
      img: "https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg",
      name: "Alan Walker",
      artist: "Artist",
    },
    {
      img: "https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg",
      name: "Alan Walker",
      artist: "Artist",
    },
    {
      img: "https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg",
      name: "Alan Walker",
      artist: "Artist",
    },
    {
      img: "https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg",
      name: "Alan Walker",
      artist: "Artist",
    },
  ];
  return (
    <div className="sidebar">
      <div className="homeAndSearch">
        <div
          className="home"
          onClick={() => {
            setIsSearch(false);
          }}
        >
          <i className="">
            <FaHome />
          </i>
          <p>Home</p>
        </div>
        <div
          className="search"
          onClick={() => {
            setIsSearch(true);
            console.log(isSearch);
          }}
        >
          <i className="">
            <IoSearch />
          </i>
          <p>Search</p>
        </div>
      </div>
      <div className="second-sidebar">
        <div className="playlist">
          <i className="fa-solid fa-music"></i>
          <h3>My Playlist</h3>
        </div>
        <div className="recommended-song-box">
          {list.map((item, i) => (
            <div className="recently_played" key={i}>
              <img src={item.img} alt="Alan Walker" />
              <h5>{item.name}</h5>
              <h6>{item.artist}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { FaHome, FaSearch, FaMusic, FaHeart, FaPlus } from "react-icons/fa";
import { useMusicPlayer } from "../context/MusicPlayerContext";

function Sidebar() {
  const { state, dispatch } = useMusicPlayer();

  const playlists = [
    { id: 1, name: 'My Playlist #1' },
    { id: 2, name: 'My Playlist #2' },
    { id: 3, name: 'My Playlist #3' },
    { id: 4, name: 'My Playlist #4' },
  ];

  const handlePlaylistClick = (playlistId) => {
    const firstSong = state.playlist[0];
    if (firstSong) {
      dispatch({ type: 'SET_CURRENT_SONG', payload: firstSong });
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  };

  const handleLikedSongsClick = () => {
    const likedSong = state.playlist[1];
    if (likedSong) {
      dispatch({ type: 'SET_CURRENT_SONG', payload: likedSong });
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  };

  return (
    <div className="sidebar">
      <div className="homeAndSearch">
        <div className="home">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="search">
          <FaSearch />
          <span>Search</span>
        </div>
      </div>

      <div className="second-sidebar">
        <div className="library-header">
          <div className="library-title">
            <FaMusic />
            <span>Your Library</span>
          </div>
          <button className="add-playlist-btn">
            <FaPlus />
          </button>
        </div>

        <div className="playlists">
          <div className="playlist" onClick={handleLikedSongsClick}>
            <FaHeart />
            <span>Liked Songs</span>
          </div>
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="playlist"
              onClick={() => handlePlaylistClick(playlist.id)}
            >
              <FaMusic />
              <span>{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="attribution">
        <p>Music by Bensound.com</p>
      </div>
    </div>
  );
}

export default Sidebar;

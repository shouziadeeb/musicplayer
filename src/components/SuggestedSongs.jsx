import React from 'react';
import { useMusicPlayer } from '../context/MusicPlayerContext';
import { FaPlay, FaPause } from 'react-icons/fa';

function SuggestedSongs() {
  const { state, dispatch } = useMusicPlayer();
  const { playlist, currentSong, isPlaying } = state;

  const handleSongClick = (song) => {
    if (currentSong?.id === song.id) {
      dispatch({ type: 'TOGGLE_PLAY' });
    } else {
      dispatch({ type: 'SET_CURRENT_SONG', payload: song });
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  };

  return (
    <div className="suggested-songs">
      <h2 className="section-heading">Suggested Songs</h2>
      <div className="songs-grid">
        {playlist.map((song) => (
          <div
            key={song.id}
            className={`song-card ${currentSong?.id === song.id ? 'active' : ''}`}
            onClick={() => handleSongClick(song)}
          >
            <div className="song-card-image">
              <img src={song.cover} alt={song.title} className="song-cover" />
              <div className="song-card-overlay">
                {currentSong?.id === song.id && isPlaying ? (
                  <FaPause className="play-icon" />
                ) : (
                  <FaPlay className="play-icon" />
                )}
              </div>
            </div>
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <div className="song-meta">
                <span className="song-genre">{song.genre}</span>
                <span className="song-duration">{song.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedSongs;

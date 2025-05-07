import React, { useRef, useEffect } from 'react';
import { useMusicPlayer } from '../context/MusicPlayerContext';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

function AudioPlayer() {
  const audioRef = useRef(null);
  const { state, dispatch } = useMusicPlayer();
  const { currentSong, isPlaying, volume, currentTime, duration } = state;

  // Handle song changes
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      audioRef.current.load(); // Ensure the audio is loaded
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error playing audio:', error);
            dispatch({ type: 'TOGGLE_PLAY' }); // Reset play state if there's an error
          });
        }
      }
    }
  }, [currentSong, dispatch]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error playing audio:', error);
            dispatch({ type: 'TOGGLE_PLAY' });
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, dispatch]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch({
        type: 'SET_CURRENT_TIME',
        payload: audioRef.current.currentTime,
      });
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch({
        type: 'SET_DURATION',
        payload: audioRef.current.duration,
      });
    }
  };

  const handleEnded = () => {
    dispatch({ type: 'NEXT_SONG' });
  };

  const handleError = (error) => {
    console.error('Audio error:', error);
    dispatch({ type: 'TOGGLE_PLAY' });
  };

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      dispatch({ type: 'SET_CURRENT_TIME', payload: time });
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    dispatch({ type: 'SET_VOLUME', payload: newVolume });
  };

  if (!currentSong) return null;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
        preload="auto"
      />
      
      <div className="player-controls">
        <div className="song-info">
          <img src={currentSong.cover} alt={currentSong.title} className="cover-art" />
          <div className="song-details">
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
        </div>

        <div className="controls">
          <button onClick={() => dispatch({ type: 'PREV_SONG' })}>
            <FaStepBackward />
          </button>
          <button onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={() => dispatch({ type: 'NEXT_SONG' })}>
            <FaStepForward />
          </button>
        </div>

        <div className="progress-container">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="progress-bar"
          />
          <span>{formatTime(duration)}</span>
        </div>

        <div className="volume-control">
          <FaVolumeUp />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer; 
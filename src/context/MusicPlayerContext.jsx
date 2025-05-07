import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the context
export const MusicPlayerContext = createContext();

// Initial state
const initialState = {
  currentSong: null,
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  duration: 0,
  playlist: [],
  currentIndex: 0,
  error: null
};

// Reducer function
const musicPlayerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.payload,
        error: null
      };
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying,
        error: null
      };
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload
      };
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload
      };
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.payload,
        error: null
      };
    case 'NEXT_SONG':
      const nextIndex = (state.currentIndex + 1) % state.playlist.length;
      return {
        ...state,
        currentIndex: nextIndex,
        currentSong: state.playlist[nextIndex],
        error: null
      };
    case 'PREVIOUS_SONG':
      const prevIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length;
      return {
        ...state,
        currentIndex: prevIndex,
        currentSong: state.playlist[prevIndex],
        error: null
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isPlaying: false
      };
    default:
      return state;
  }
};

// Provider component
export const MusicPlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicPlayerReducer, initialState);

  useEffect(() => {
    // Initialize with sample playlist
    const samplePlaylist = [
      {
        id: 1,
        title: "Acoustic Breeze",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
        cover: "https://www.bensound.com/bensound-img/acousticbreeze.jpg",
        genre: "Acoustic",
        duration: "2:58"
      },
      {
        id: 2,
        title: "Summer",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
        cover: "https://www.bensound.com/bensound-img/summer.jpg",
        genre: "Pop",
        duration: "2:58"
      },
      {
        id: 3,
        title: "Creative Minds",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
        cover: "https://www.bensound.com/bensound-img/creativeminds.jpg",
        genre: "Electronic",
        duration: "1:45"
      },
      {
        id: 4,
        title: "Jazz Piano",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
        cover: "https://www.bensound.com/bensound-img/jazzyfrenchy.jpg",
        genre: "Jazz",
        duration: "1:44"
      },
      {
        id: 5,
        title: "Memories",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
        cover: "https://www.bensound.com/bensound-img/memories.jpg",
        genre: "Pop",
        duration: "3:15"
      },
      {
        id: 6,
        title: "Once Again",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
        cover: "https://www.bensound.com/bensound-img/onceagain.jpg",
        genre: "Pop",
        duration: "2:40"
      },
      {
        id: 7,
        title: "Sweet",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
        cover: "https://www.bensound.com/bensound-img/sweet.jpg",
        genre: "Pop",
        duration: "2:35"
      },
      {
        id: 8,
        title: "Ukulele",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
        cover: "https://www.bensound.com/bensound-img/ukulele.jpg",
        genre: "Acoustic",
        duration: "2:26"
      },
      {
        id: 9,
        title: "Sunny",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
        cover: "https://www.bensound.com/bensound-img/sunny.jpg",
        genre: "Pop",
        duration: "2:20"
      },
      {
        id: 10,
        title: "Epic",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
        cover: "https://www.bensound.com/bensound-img/epic.jpg",
        genre: "Cinematic",
        duration: "2:58"
      },
      {
        id: 11,
        title: "Energy",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
        cover: "https://www.bensound.com/bensound-img/energy.jpg",
        genre: "Electronic",
        duration: "2:59"
      },
      {
        id: 12,
        title: "Happy Rock",
        artist: "Bensound",
        url: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
        cover: "https://www.bensound.com/bensound-img/happyrock.jpg",
        genre: "Rock",
        duration: "1:45"
      }
    ];

    dispatch({ type: 'SET_PLAYLIST', payload: samplePlaylist });
  }, []);

  return (
    <MusicPlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// Custom hook for using the context
export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}; 
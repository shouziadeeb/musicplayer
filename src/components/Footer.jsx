import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { IoMdRepeat } from "react-icons/io";

function Footer() {
  const [isMusicPlay, setIsMusicPlay] = useState(false);
  const [sound, setSound] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const musicRef = useRef();
  const [currentSongTime, setCurrentSongTime] = useState(0);

  const songArray = [
    {
      name: "Happy Birthday",
      link: "public/music/Happy_birthday__Instrumental___Happy_Birthday_Song___DK_MUSIC__(256k).mp3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYU2RNmmxDsFuZIlmKInfhSysIveWA8UtjA&s",
    },
    {
      name: "Kabir Singh",
      link: "public/music/KABIR_SINGH_mass_Full_BGM_(_without_remake_)(256k).mp3",
      img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg",
    },
    {
      name: "War",
      link: "public/music/War_Theme_(_BGM_)_Ringtone_2019_(256k).mp3",
      img: "https://m.media-amazon.com/images/M/MV5BZGI0ZGQ3MTQtYjllYy00MTkyLTg4ZWUtOTc1MmI2ZDE4OTYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Saho",
      link: "public/music/Saaho_BGM(128k).mp3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6mf9qqlrr07gM2uL7lSXG3ZevP-rbSUCrg&s",
    },
  ];
  const handlePlayPause = () => {
    if (!isMusicPlay) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
      setCurrentSongTime(musicRef.current.currentTime);
    }

    setIsMusicPlay(!isMusicPlay);
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setSound(newVolume); // Update volume state
    musicRef.current.volume = newVolume; // Set audio element's volume
  };

  // HANDLE SONG PROGRESS
  const handleProgress = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);

    musicRef.current.currentTime =
      (musicRef.current.duration * newProgress) / 100;
  };

  useEffect(() => {
    const updateProgress = () => {
      if (musicRef.current && musicRef.current.duration) {
        const currentTime = musicRef.current.currentTime;
        const duration = musicRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    // Add the timeupdate event listener to update progress
    const audioElement = musicRef.current;
    audioElement.addEventListener("timeupdate", updateProgress);

    // Cleanup the event listener on component unmount
    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // Next and Prev Song

  const handleSongNextPrev = (value) => {
    setCurrentSong((prev) => {
      let newIndex = prev + value;

      if (newIndex >= songArray.length) {
        return 0; // Reset to the first song
      }
      if (newIndex < 0) {
        return songArray.length - 1; // Go to the last song
      }

      return newIndex; // Move to the next/previous song
    });
    setCurrentSongTime(0);
  };

  const handlePause = () => {
    setCurrentSongTime(musicRef.current.currentTime);
    console.log(6);
  };

  useEffect(() => {
    // Update the audio source whenever the current song changes
    if (musicRef.current) {
      musicRef.current.src = songArray[currentSong].link;
      if (isMusicPlay) {
        musicRef.current.play(); // Automatically play the new song
      }
    }
  }, [currentSong, isMusicPlay]);

  // Pause music when the song ends

  const handleSongEnd = () => {
    // setIsMusicPlay(false);
    handleSongNextPrev(1);
  };

  const handlePlay = () => {
    musicRef.current.currentTime = currentSongTime;
    console.log("play");
  };

  return (
    <footer className="footer">
      <div className="currntSong">
        <img
          style={{ animation: isMusicPlay && "rotation 2.5s infinite linear" }}
          src={songArray[currentSong].img}
          alt="Current Song"
        />
        <h6>{songArray[currentSong].name}</h6>
      </div>
      <div className="btnsAndRange">
        <div className="playBtns">
          <i>
            {" "}
            <IoShuffle />
          </i>
          <i className="next_and_prv" onClick={() => handleSongNextPrev(-1)}>
            <FaBackward />
          </i>
          <i
            onClick={() => {
              handlePlayPause();
              // setIsMusicPlay((prev) => !prev);
            }}
          >
            {" "}
            {isMusicPlay ? <FaPause /> : <FaPlay />}
          </i>
          <i className="next_and_prv" onClick={() => handleSongNextPrev(+1)}>
            <FaForward />
          </i>
          <i>
            {" "}
            <IoMdRepeat />
          </i>
        </div>
        <input
          id="progress"
          min="0"
          max="100"
          type="range"
          value={progress}
          onChange={handleProgress}
        />
      </div>
      <div className="volumeDiv">
        <i className="fa-solid fa-volume-high volumeRange"></i>
        <input
          type="range"
          value={sound}
          className="range"
          min="0"
          max="1"
          step="0.1"
          onChange={handleVolumeChange}
        />
      </div>
      <div className="music_box" style={{ display: "none" }}>
        <audio
          onPause={handlePause}
          src={songArray[currentSong].link}
          onEnded={handleSongEnd}
          ref={musicRef}
          onPlay={handlePlay}
        ></audio>
      </div>
    </footer>
  );
}

export default Footer;

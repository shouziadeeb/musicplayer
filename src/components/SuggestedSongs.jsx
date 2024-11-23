import React from "react";
import { CiPlay1 } from "react-icons/ci";

function SuggestedSongs() {
  return (
    <div className="suggestionSongs">
      <div className="play-card">
        <img
          src="https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg"
          alt="Allan Walker"
        />
        <p>Allan Walker</p>
        <button className="playBtn">
          <CiPlay1 />
        </button>
      </div>
      <div className="play-card">
        <img
          src="https://wallpapercat.com/w/full/8/c/0/42729-1080x1920-phone-1080p-alan-walker-background.jpg"
          alt="Marshmellow"
        />
        <p>Marshmellow</p>
        <button className="playBtn">
          <CiPlay1 />
        </button>
      </div>
    </div>
  );
}

export default SuggestedSongs;

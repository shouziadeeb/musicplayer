import React from "react";

function PopularArtists() {
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
    <div>
      <h4 className="albumHadding">Popular Artists</h4>
      <div className="popularArtists">
        {/* Map through your artist data */}
        {list.map((item, i) => (
          <div className="singers" key={i}>
            <img src={item.img} alt="Alan Walker" />
            <h5>{item.name}</h5>
            <h6>{item.artist}</h6>
          </div>
        ))}

        {/* Repeat similar blocks for other artists */}
      </div>
    </div>
  );
}

export default PopularArtists;

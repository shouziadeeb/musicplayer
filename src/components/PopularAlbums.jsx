import React from "react";

function PopularAlbums() {
  const albums = [
    {
      id: 1,
      title: "÷ (Divide)",
      artist: "Ed Sheeran",
      image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
      year: "2017",
    },
    {
      id: 2,
      title: "After Hours",
      artist: "The Weeknd",
      image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      year: "2020",
    },
    {
      id: 3,
      title: "Midnights",
      artist: "Taylor Swift",
      image: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
      year: "2022",
    },
    {
      id: 4,
      title: "Scorpion",
      artist: "Drake",
      image: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
      year: "2018",
    },
    {
      id: 5,
      title: "Happier Than Ever",
      artist: "Billie Eilish",
      image: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
      year: "2021",
    },
  ];

  return (
    <div className="popular-albums-section">
      <h2 className="section-heading">Popular Albums</h2>
      <div className="popularAlbums">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <img src={album.image} alt={album.title} />
            <div className="album-info">
              <h5>{album.title}</h5>
              <p>{album.artist}</p>
              <span>{album.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularAlbums;

import React from "react";

function PopularArtists() {
  const artists = [
    {
      id: 1,
      name: "Ed Sheeran",
      image: "https://i.scdn.co/image/ab6761610000e5ebda5d5a1f2c2a0d1a29f0d6b5",
      followers: "85.5M"
    },
    {
      id: 2,
      name: "The Weeknd",
      image: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
      followers: "45.2M"
    },
    {
      id: 3,
      name: "Taylor Swift",
      image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
      followers: "92.1M"
    },
    {
      id: 4,
      name: "Drake",
      image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
      followers: "65.8M"
    },
    {
      id: 5,
      name: "Billie Eilish",
      image: "https://i.scdn.co/image/ab6761610000e5ebd8b9980db67272cb4d2c3daf",
      genre: "Pop",
    },
    {
      id: 6,
      name: "Ed Sheeran",
      image: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
      genre: "Pop",
    },
  ];

  return (
    <div className="popular-artists-section">
      <h2 className="section-heading">Popular Artists</h2>
      <div className="popularArtists">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.image} alt={artist.name} />
            <div className="artist-info">
              <h5>{artist.name}</h5>
              <p>{artist.followers} followers</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularArtists;

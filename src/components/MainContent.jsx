import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SuggestedSongs from './SuggestedSongs';
import PopularArtists from './PopularArtists';
import PopularAlbums from './PopularAlbums';

function MainContent() {
  return (
    <main className="box">
      {/* <Header /> */}
      <SearchBar />
      <SuggestedSongs />
      <PopularArtists />
      <PopularAlbums />
    </main>
  );
}

export default MainContent; 
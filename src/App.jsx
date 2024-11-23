import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SuggestedSongs from "./components/SuggestedSongs";
import PopularArtists from "./components/PopularArtists";
import PopularAlbums from "./components/PopularAlbums";
import Footer from "./components/Footer";
import "./index.css";
import Sidebar from "./components/SideBar";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="container">
      <Sidebar setIsSearch={setIsSearch} isSearch={isSearch} />
      <main className="box">
        <Header isSearch={isSearch} />
        <SearchBar />
        <SuggestedSongs />
        <PopularArtists />
        <PopularAlbums />
      </main>
      <Footer />
    </div>
  );
}

export default App;

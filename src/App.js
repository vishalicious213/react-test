import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import ArtistGallery from "./components/ArtistGallery"
import NavBar from './components/NavBar';
// import styled from 'styled-components';

function App() {
  return (
    <div className="mainProgram">
      <section className="top">
        <NavBar />
        {/* <Route path='/upload' component={} /> */}
        {/* <Route path='/sign-in' component={} /> */}

        <div className="banner">
          <h1>Art Portfolio</h1>
        </div>

        <form className="artistSearchForm">
          <input className="artistSearchBox" type="text" name="search" placeholder="&#x1f50d; Search artists..." />
        </form>
      </section>

      <ArtistGallery />
    </div>
  );
}

export default App;

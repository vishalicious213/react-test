import React from 'react';
import './App.css';
import ArtistGallery from "./ArtistGallery"
// import styled from 'styled-components';


function App() {
  return (
    <div className="mainProgram">
      <section className="top">
        <nav className="navBar">
          <i class="navIcon fas fa-home" title="Home"></i>
          <i class="navIcon fas fa-plus-circle" title="Upload"></i>
          <i class="navIcon fas fa-sign-in-alt" title="Sign in/Register"></i>
        </nav>

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

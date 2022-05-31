import React from 'react';
import ImageSlider from './section/imageSlider/ImageSlider';
import Guest from './section/guest/Guest';
import Map from './section/map/Map';
import Heart from './section/heart/Heart';
import firebase from './util/firebase';

import './App.scss';

function App() {
  console.log("App");

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          first commit test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ImageSlider />
      <Guest firebase={firebase}/>
      <Map />
      <Heart />
    </div>
  );
}

export default App;

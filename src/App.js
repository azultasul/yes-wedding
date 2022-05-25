import React from 'react';
import ImageSlider from './section/imageSlider/ImageSlider';
import Guest from './section/guest/Guest';
import Modal from './components/Modal';
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
      <Guest />
      {/* <Modal /> */}
    </div>
  );
}

export default App;

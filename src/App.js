import React from 'react';
import ImageSlider from './layout/ImageSlider';
import Guest from './layout/Guest';
import './App.scss';

function App() {
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
    </div>
  );
}

export default App;

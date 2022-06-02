import React from 'react';
import Kv from './section/kv/Kv';
import Gallery from './section/gallery/Gallery';
import Guest from './section/guest/Guest';
import Map from './section/map/Map';
import Contact from './section/contact/Contact';
import firebase from './util/firebase';
import Footer from './section/footer/Footer';

import './App.scss';

function App() {
  console.log("App");

  return (
    <div className="App">
      <Kv></Kv>
      <Gallery />
      <Guest firebase={firebase}/>
      <Map />
      <Contact />
      <Footer></Footer>      
    </div>
  );
}

export default App;

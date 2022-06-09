import React, { useEffect } from 'react';
import Kv from './section/kv/Kv';
import Gallery from './section/gallery/Gallery';
import Calendar from './section/calendar/Calendar';
import Guest from './section/guest/Guest';
import Map from './section/map/Map';
import Contact from './section/contact/Contact';
import firebase from './util/firebase';
import Footer from './section/footer/Footer';

import './App.scss';

function App() {
  const scrollHandler = () => {
    const scrollTargetShowUp = document.querySelectorAll("[data-scroll-target]");
    const windowPos = window.pageYOffset + window.innerHeight;
    scrollTargetShowUp.forEach(item => {
      if ( windowPos > item.offsetTop) {
        item.classList.add('animate');
      } else {
        item.classList.remove('animate');
      }
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div className="App">
      <Kv></Kv>
      <Gallery />
      <Calendar />
      <Map />
      <Guest firebase={firebase}/>
      <Contact />
      <Footer></Footer>      
    </div>
  );
}

export default App;

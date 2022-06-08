import React, { useEffect } from 'react';
import Kv from './section/kv/Kv';
import Gallery from './section/gallery/Gallery';
import Calendar from './section/calendar/Calendar';
import Guest from './section/guest/Guest';
import Map from './section/map/Map';
import Contact from './section/contact/Contact';
import firebase from './util/firebase';
import Footer from './section/footer/Footer';

import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './App.scss';

// gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    const gsapOpacity = document.querySelectorAll("[data-gsap*='opacity']");
    const gsapShowUp = document.querySelectorAll("[data-gsap*='show-up']");
    console.log("gsapOpacity", gsapOpacity);
    gsapOpacity.forEach(item => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=20",
          end: "top center+=100",
          // markers: true,
          scrub: true,
        }
      })
      tl.fromTo(item, {opacity: 0}, {opacity: 1});
    });
    gsapShowUp.forEach(item => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=20",
          end: "top center+=250",
          markers: true,
          scrub: true,
        }
      })
      tl.fromTo(item, {opacity: 0, y: "20%"}, {opacity: 1, y: "0px"});
    });

    return () => {
      // tl.scrollTrigger.kill();
    };
  }, []);

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

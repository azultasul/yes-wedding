import React, { useEffect, useRef, useState } from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = (props) => {
  const splideRef = useRef();
  
  return (
    <Splide ref={splideRef} hasTrack={props.hasTrack} data-splide={props.dataSplide} onMoved={() => {props.moved(splideRef)}}>
      {props.children}
    </Splide>
  );
};

export default Slider;
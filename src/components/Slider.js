import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = (props) => {
  return (
    <Splide hasTrack={props.hasTrack} data-splide={props.dataSplide}>
      {props.children}
    </Splide>
  );
};

export default Slider;
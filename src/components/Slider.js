import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = (props) => {
  return (
    <Splide data-splide={props.dataSplide}>
      {props.children}
    </Splide>
  );
};

export default Slider;
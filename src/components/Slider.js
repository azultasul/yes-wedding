import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = (props) => {
  return (
    <Splide>
      {props.slide}
    </Splide>
  );
};

export default Slider;
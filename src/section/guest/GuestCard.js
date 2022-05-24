import React, { Fragment } from 'react';

import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../../components/Slider';

import classes from './GuestCard.module.scss';

const GuestCard = (props) => {
  console.log("GuestCard");

  const sliderContent = props.guestList.map(guest => (
    <SplideSlide className={classes.card} key={guest.id}>
      <div>{guest.name}</div>
      <div>{guest.message}</div>
      <div>{guest.time}</div>
    </SplideSlide>
  ))

  return (
    <Fragment>
      <Slider slide={sliderContent} 
        dataSplide='{
          "type":"loop", "perPage":3, "perMove": 3, "padding":"20px", "gap":"10px", "width":"100%"
        }'
      />
    </Fragment>
  )
}

export default GuestCard;
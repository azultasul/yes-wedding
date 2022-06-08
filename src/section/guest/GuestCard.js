import React, { Fragment } from 'react';

import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../../components/Slider';

import classes from './GuestCard.module.scss';

const GuestCard = (props) => {
  const sliderContent = props.guestList.map(guest => (
    <SplideSlide className={classes.card} key={guest.id}>
      <img src={require('../../assets/images/paper.jpeg')} alt='paper card'/>
      <div className={classes['card__cont']}>
        <div>{guest.name}</div>
        <div className={classes['card__cont--message']}>{guest.message}</div>
        <div className={classes['card__cont--time']}>{guest.time}</div>
      </div>
    </SplideSlide>
  ))

  return (
    <Fragment>
      <Slider
        dataSplide='{
          "type":"loop", "perPage":2, "perMove":2, "padding":"20px", "gap":"10px", "width":"100%", "pagination": false, "arrows": false
        }'
      >{sliderContent}</Slider>
    </Fragment>
  )
}

export default GuestCard;
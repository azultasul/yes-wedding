import React from 'react';
import Modal from '../../components/Modal';

import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../../components/Slider';

import classes from './ImageSlider.module.scss';

const ImageSlider = (props) => {
  const sliderContent = props.info.map(info => (
    <SplideSlide className={classes.slider__slide} key={info.id}>
      <img src={require(`../../assets/images/${info.imgPath}`)} alt={`slide ${info.id}`}/>
    </SplideSlide>
  ));
  
  console.log("props", props.currentImage);

  return (
    <Modal onClose={props.onClose}>
      {/* <Slider> */}
      <Slider dataSplide={`{"type":"loop", "start": ${props.currentImage - 1}}`}>
        {sliderContent}
      </Slider>
    </Modal>
  )
};


export default ImageSlider;
import React from 'react';

import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../../components/Slider';

import classes from './ImageSlider.module.scss';

const dummySlideInfo = [
  { id: 1, imgPath: 'dummy-1.jpg' },
  { id: 2, imgPath: 'dummy-2.jpg' },
  { id: 3, imgPath: 'dummy-3.jpg' }
];

const ImageSlider = (props) => {
  const sliderContent = dummySlideInfo.map(info => (
    <SplideSlide className={classes.slider__slide} key={info.id}>
      <img src={require(`../../assets/images/${info.imgPath}`)} alt={`slide ${info.id}`}/>
    </SplideSlide>
  ));
  return (
    <section className='img-slider'>
      <h2>웨딩 사진</h2>
      <Slider>{sliderContent}</Slider>
    </section>
  )
};


export default ImageSlider;
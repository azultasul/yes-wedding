import React, { useState } from 'react';
import Modal from '../../components/Modal';

import { SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Slider from '../../components/Slider';

import classes from './ImageSlider.module.scss';

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentImage);
  const sliderContent = props.info.map(info => (
    <SplideSlide className={classes.slider__slide} key={info.id}>
      <img src={require(`../../assets/images/${info.imgPath}`)} alt={`slide ${info.id}`}/>
    </SplideSlide>
  ));

  const setCurrentIndexHandler = (state) => {
    switch (state) {
      case 'prev':

        setCurrentIndex(currentIndex - 1 < 1 ? props.info.length : currentIndex - 1);
        break;
      case 'next':

        setCurrentIndex(currentIndex + 1 > props.info.length ? 1 : currentIndex + 1);
        break;
      default:
        setCurrentIndex(currentIndex);
    }
  }

  return (
    <Modal onClose={props.onClose}>
      {/* <Slider> */}
      <Slider hasTrack={ false } dataSplide={`{"type":"loop", "pagination": false, "start": ${props.currentImage - 1}}`}>
        <SplideTrack>
          {sliderContent}
        </SplideTrack>

        <div className="splide__arrows">
          <button onClick={() => {setCurrentIndexHandler('prev')}} className={`splide__arrow splide__arrow--prev ${classes['slider__arrow']} ${classes['slider__arrow--prev']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
          </button>
          <div className={classes['slider__num']}>
            {/* <span className={classes['slider__num-cur']}></span> / <span>{props.info.length}</span> */}
            <span className={classes['slider__num-cur']}>{ currentIndex }</span> / <span>{props.info.length}</span>
          </div>
          <button onClick={() => {setCurrentIndexHandler('next')}} className={`splide__arrow splide__arrow--next ${classes['slider__arrow']} ${classes['slider__arrow--next']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
          </button>
        </div>
      </Slider>
    </Modal>
  )
};


export default ImageSlider;
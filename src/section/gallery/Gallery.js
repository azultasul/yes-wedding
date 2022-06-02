import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

// import { SplideSlide } from '@splidejs/react-splide';
// import Slider from '../../components/Slider';

import classes from './Gallery.module.scss';

const dummySlideInfo = [
  { id: 1, imgPath: 'dummy-1.jpg' },
  { id: 2, imgPath: 'dummy-2.jpg' },
  { id: 3, imgPath: 'dummy-3.jpg' },
  { id: 4, imgPath: 'dummy-1.jpg' },
  { id: 5, imgPath: 'dummy-2.jpg' },
  { id: 6, imgPath: 'dummy-3.jpg' },
  { id: 7, imgPath: 'dummy-1.jpg' },
  { id: 8, imgPath: 'dummy-2.jpg' },
  { id: 9, imgPath: 'dummy-3.jpg' },
  { id: 10, imgPath: 'dummy-1.jpg' },
  { id: 11, imgPath: 'dummy-2.jpg' },
  { id: 12, imgPath: 'dummy-3.jpg' },
];

const Gallery = (props) => {
  const [imagesIsShown, setImagesIsShown] = useState(false);
  const [sliderIsShown, setSliderIsShown] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const ImagesOdd = dummySlideInfo.filter(info => info.id % 2 === 1 ).map(info => (
    <button onClick={() => {showSliderHandler(info.id)}} className={classes['image']} key={info.id}>
      <img src={require(`../../assets/images/${info.imgPath}`)} alt={`slide ${info.id}`}/>
    </button>
  ));
  const ImagesEven = dummySlideInfo.filter(info => info.id % 2 === 0 ).map(info => (
    <button onClick={() => {showSliderHandler(info.id)}} className={classes['image']} key={info.id}>
      <img src={require(`../../assets/images/${info.imgPath}`)} alt={`slide ${info.id}`}/>
    </button>
  ));

  const toggleImagesHandler = () => {
    const gallerySection = document.querySelector('section#gallery #image-wrap');
    if (imagesIsShown) {
      setImagesIsShown(false);
      gallerySection.style.height = '650px';
    } else {
      setImagesIsShown(true);
      gallerySection.style.height = 'auto';
    }
  }

  const showSliderHandler = (id) => {
    setCurrentImage(id);
    setSliderIsShown(true);
  }
  const hideSliderHandler = () => {
    setSliderIsShown(false);
  }

  return (
    <section id='gallery'>
      <div className='section-tit'>🌻</div>
      <div id='image-wrap' className={classes['image-wrap']}>
        <div className={classes['image-inr']}>{ImagesOdd}</div>
        <div className={classes['image-inr']}>{ImagesEven}</div>
      </div>
      <button onClick={toggleImagesHandler}>{imagesIsShown ? '사진 감추기' : '사진 더 보기'}</button>
      {sliderIsShown && <ImageSlider onClose={hideSliderHandler} info={dummySlideInfo} currentImage={currentImage} />}
    </section>
  )
};


export default Gallery;
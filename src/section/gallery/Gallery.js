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
    const galleryDiv = document.querySelectorAll('section#gallery #image-wrap div div');
    const galleryH = galleryDiv[0].clientHeight > galleryDiv[1].clientHeight ? galleryDiv[0].clientHeight : galleryDiv[1].clientHeight

    if (imagesIsShown) {
      setImagesIsShown(false);
      gallerySection.style.height = '550px';
    } else {
      setImagesIsShown(true);
      gallerySection.style.height = `${galleryH}px`;
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
      <div data-gsap="opacity" className='section-flower'>🌻</div>
      <div data-gsap="show-up" id='image-wrap' className={classes['image-wrap']}>
        <div className={classes['image-inr']}>
          <div className={classes['image-row']}>{ImagesOdd}</div>
          <div className={classes['image-row']}>{ImagesEven}</div>
        </div>
      </div>
      
      <button onClick={toggleImagesHandler} className={classes['image__btn-wrap']}>
        <svg className={`${imagesIsShown ? classes['image__btn--top'] : classes['image__btn--down']} ${classes['image__btn']}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7893 0.393823C14.295 -0.131274 15.115 -0.131274 15.6207 0.393823C16.1264 0.91892 16.1264 1.77027 15.6207 2.29537L10.1264 8L15.6207 13.7046C16.1264 14.2297 16.1264 15.0811 15.6207 15.6062C15.115 16.1313 14.295 16.1313 13.7893 15.6062L7.3793 8.95077C6.87357 8.42567 6.87357 7.57432 7.3793 7.04923L13.7893 0.393823Z" fill="#7c7f7f"/>
          <path d="M6.78928 0.393823C7.29501 -0.131274 8.11497 -0.131274 8.6207 0.393823C9.12643 0.91892 9.12643 1.77027 8.6207 2.29537L3.12643 8L8.6207 13.7046C9.12643 14.2297 9.12643 15.0811 8.6207 15.6062C8.11497 16.1313 7.29501 16.1313 6.78928 15.6062L0.3793 8.95077C-0.126432 8.42567 -0.126434 7.57432 0.3793 7.04923L6.78928 0.393823Z" fill="#7c7f7f"/>
        </svg>
        <div>{imagesIsShown ? '접기' : '더 보기'}</div>
      </button>
      {sliderIsShown && <ImageSlider onClose={hideSliderHandler} info={dummySlideInfo} currentImage={currentImage} />}
    </section>
  )
};


export default Gallery;
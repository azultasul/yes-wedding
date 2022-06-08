import React, { useState } from 'react';
import Share from './Share';

import classes from './Footer.module.scss';


const Footer = (props) => {
  const [shareIsShown, setShareIsShown] = useState(false);

  const showShareHandler = () => {
    setShareIsShown(true);
  }
  const hideShareHandler = () => {
    setShareIsShown(false);
  }
  return (
    <section id='footer' className={classes['footer']}>
      <button onClick={showShareHandler} className={classes['footer__btn']}>
        <div className={classes['footer__icon']}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 16C17.2 16 16.4 16.3 15.9 16.9L8.9 12.9C9 12.6 9 12.3 9 12C9 11.7 9 11.4 8.9 11.2L15.9 7.2C16.4 7.7 17.2 8 18 8C19.7 8 21 6.7 21 5C21 3.3 19.7 2 18 2C16.3 2 15 3.3 15 5C15 5.3 15 5.6 15.1 5.8L8.1 9.8C7.6 9.3 6.8 9 6 9C4.3 9 3 10.3 3 12C3 13.7 4.3 15 6 15C6.8 15 7.6 14.7 8.1 14.1L15.1 18.1C15 18.4 15 18.7 15 19C15 20.7 16.3 22 18 22C19.7 22 21 20.7 21 19C21 17.3 19.7 16 18 16ZM18 3.5C18.8 3.5 19.5 4.2 19.5 5C19.5 5.8 18.8 6.5 18 6.5C17.2 6.5 16.5 5.8 16.5 5C16.5 4.2 17.2 3.5 18 3.5ZM6 13.5C5.2 13.5 4.5 12.8 4.5 12C4.5 11.2 5.2 10.5 6 10.5C6.8 10.5 7.5 11.2 7.5 12C7.5 12.8 6.8 13.5 6 13.5ZM18 20.5C17.2 20.5 16.5 19.8 16.5 19C16.5 18.2 17.2 17.5 18 17.5C18.8 17.5 19.5 18.2 19.5 19C19.5 19.8 18.8 20.5 18 20.5Z" fill="#172144"/>
          </svg>
        </div>
        <span className={classes['footer__text']}>공유하기</span>
      </button>
      {shareIsShown && <Share onClose={hideShareHandler}></Share>}
    </section>
  )
}

export default Footer;
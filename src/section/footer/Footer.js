import React, { useState } from 'react';
import Share from './Share';

// import classes from './Footer.module.scss';


const Footer = (props) => {
  const [shareIsShown, setShareIsShown] = useState(false);

  const showShareHandler = () => {
    setShareIsShown(true);
  }
  const hideShareHandler = () => {
    setShareIsShown(false);
  }
  return (
    <section id='footer'>
      <button onClick={showShareHandler}>공유</button>
      {shareIsShown && <Share onClose={hideShareHandler}></Share>}
    </section>
  )
}

export default Footer;
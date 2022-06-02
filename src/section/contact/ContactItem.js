import React, { useState } from 'react';
import Account from './Account';

import classes from './ContactItem.module.scss';


const ContactItem = (props) => {
  const contactItem = props.contactItem
  const [accountIsShown, setAccountIsShown] = useState(false);
  const showAccountHandler = () => {
    setAccountIsShown(true);
  }
  const hideAccountHandler = () => {
    setAccountIsShown(false);
  }
  return (
    <div className={`${classes['contact__cont']}`}>
      <div>{contactItem.name}</div>
      <div className={`${classes['contact__btn-wrap']}`}>
        <a href={`tel:${contactItem.telephone}`} className={`${classes['contact__btn']}`}>📞</a>
        <a href={`sms:${contactItem.telephone}`} className={`${classes['contact__btn']}`}>💌</a>
        <button onClick={showAccountHandler} className={`${classes['contact__btn']}`}>💸</button>
        {accountIsShown && <Account onClose={hideAccountHandler} account={contactItem}></Account>}
      </div>
    </div>
  )
}

export default ContactItem;
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
    <div>
      <div className={`${classes['contact__name']}`}>{contactItem.name}</div>
      <div className={`${classes['contact__btn-wrap']}`}>
        <a href={`tel:${contactItem.telephone}`} className={`${classes['contact__btn']}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.206 13.372L14.2221 11.2742C13.128 10.4751 12.3323 10.9745 11.835 11.474C11.4372 11.7737 10.9398 12.5728 10.3431 12.1732C9.05004 11.3741 7.45864 9.77581 6.46401 8.5771C5.96669 8.07764 5.17099 7.27849 5.6683 6.77903C6.26508 6.07978 7.45864 5.28063 6.86186 4.18181C6.7624 3.78224 5.17099 1.48471 4.57421 0.685563C3.18173 -1.01262 0.894082 0.785456 0.297304 2.38374C-0.995715 6.37946 2.1871 10.2753 4.8726 13.0723C7.85649 15.9692 13.2275 20.2646 17.0071 16.5685C17.6039 15.8693 18.7974 14.4708 17.206 13.372Z" fill="#7c7f7f"/>
          </svg>
        </a>
        <a href={`sms:${contactItem.telephone}`} className={`${classes['contact__btn']}`}>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.4974 0.3L10.5527 7.5C10.2512 7.8 9.8492 7.8 9.54769 7.5L0.602989 0.3C0.803994 0.1 1.206 0 1.50751 0H18.5929C18.8944 0 19.2964 0.1 19.4974 0.3ZM20 12.8L14.3719 6.40005L20 1.80005V12.5V12.8ZM0 1.80005V12.5V12.8L5.62813 6.40005L0 1.80005ZM10.0502 9.30005C10.6532 9.30005 11.1558 9.10005 11.5578 8.70005L13.1658 7.30005L18.9949 13.9C18.8944 14 18.7939 14 18.5929 14H1.50753H1.00502L6.83415 7.40005L8.54269 8.70005C8.9447 9.10005 9.54772 9.30005 10.0502 9.30005Z" fill="#7c7f7f"/>
          </svg>
        </a>
        <button onClick={showAccountHandler} className={`${classes['contact__btn']}`}>
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.03248 8.06051C-0.34416 6.68772 -0.34416 4.4618 1.03248 3.08901L3.09873 1.0296C4.47537 -0.343199 6.70864 -0.343199 8.08528 1.0296L10 2.93827L11.9147 1.0296C13.2914 -0.343199 15.5246 -0.343199 16.9013 1.0296L18.9675 3.08901C20.3442 4.4618 20.3442 6.68772 18.9675 8.06051L14.5862 12.4279L14.5595 12.4548L10 17L5.44048 12.4548L5.41379 12.4279L1.03248 8.06051Z" fill="#7c7f7f"/>
          </svg>
        </button>
        {accountIsShown && <Account onClose={hideAccountHandler} account={contactItem}></Account>}
      </div>
    </div>
  )
}

export default ContactItem;
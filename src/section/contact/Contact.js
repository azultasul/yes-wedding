import React from 'react';
import ContactItem from "./ContactItem";

import classes from './Contact.module.scss';


const Contact = (props) => {
  const contactInfo = {
    'groom': {
      'self': {
        'name': '신랑 윤여웅',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 윤여웅',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
      'mother': {
        'name': '어머니 윤여웅',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
    },
    'bride': {
      'self': {
        'name': '신부 유은솔',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 유은솔',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
      'mother': {
        'name': '어머니 유은솔',
        'telephone': '010-2013-5513',
        'account-num': '3020648196361',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
    }
  }

  return (
    <section id='contact'>
      <div className='section-flower'>🌹</div>
      <h2>마음 전하기</h2>
      <div className={`${classes['contact__self']}`}>
        <ContactItem contactItem={contactInfo.groom.self}></ContactItem>
        <ContactItem contactItem={contactInfo.bride.self}></ContactItem>
      </div>
      <div className={`${classes['contact__parent-wrap']}`}>
        <div className={`${classes['contact__parent']}`}>
          <div>신랑측 혼주</div>
          <ContactItem contactItem={contactInfo.groom.mother}></ContactItem>
          <ContactItem contactItem={contactInfo.groom.father}></ContactItem>
        </div>
        <div className={`${classes['contact__parent']}`}>
          <div>신부측 혼주</div>
          <ContactItem contactItem={contactInfo.bride.mother}></ContactItem>
          <ContactItem contactItem={contactInfo.bride.father}></ContactItem>
        </div>
      </div>
    </section>
  )
}

export default Contact;
import React from 'react';
import ContactItem from "./ContactItem";

import classes from './Contact.module.scss';


const Contact = (props) => {
  const contactInfo = {
    'groom': {
      'self': {
        'name': '신랑 윤여웅',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 윤여웅',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
      'mother': {
        'name': '어머니 윤여웅',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
    },
    'bride': {
      'self': {
        'name': '신부 유은솔',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 유은솔',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
      'mother': {
        'name': '어머니 유은솔',
        'telephone': '010-1234-5678',
        'account-num': '1234567890123',
        'account-bank': '농협',
        'account-name': '유다솔',
      },
    }
  }

  return (
    <section id='contact'>
      <div data-gsap="opacity" className='section-flower'>🌹</div>
      <h2 data-gsap="show-up">마음 전하기</h2>
      <div data-gsap="show-up" className={`${classes['contact__self']}`}>
        <ContactItem contactItem={contactInfo.groom.self}></ContactItem>
        <ContactItem contactItem={contactInfo.bride.self}></ContactItem>
      </div>
      <h2 data-gsap="show-up" className={`${classes['contact__parent']}`}>혼주에게 전하기</h2>
      <div data-gsap="show-up" className={`${classes['contact__parent-wrap']}`}>
        <div className={`${classes['parent']}`}>
          <span className={`${classes['parent__cat']}`}>신랑측 혼주</span>
          <ContactItem contactItem={contactInfo.groom.father}></ContactItem>
          <ContactItem contactItem={contactInfo.groom.mother}></ContactItem>
        </div>
        <div className={`${classes['parent']}`}>
          <span className={`${classes['parent__cat']}`}>신부측 혼주</span>
          <ContactItem contactItem={contactInfo.bride.father}></ContactItem>
          <ContactItem contactItem={contactInfo.bride.mother}></ContactItem>
        </div>
      </div>
    </section>
  )
}

export default Contact;
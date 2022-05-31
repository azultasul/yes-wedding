import React from 'react';

import classes from './Heart.module.scss';


const Heart = (props) => {
  const heartInfo = {
    'groom': {
      'self': {
        'name': '신랑 윤여웅',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 윤여웅',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
      },
      'mother': {
        'name': '어머니 윤여웅',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
      },
    },
    'bride': {
      'self': {
        'name': '신부 유은솔',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
        'kakao': 'http://kko.to/T7HuzTh80'
      },
      'father': {
        'name': '아버지 유은솔',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
      },
      'mother': {
        'name': '어머니 유은솔',
        'telephone': '010-2013-5513',
        'Account': '농협 3020648196361 유다솔',
      },
    }
  }

  return (
    <section>
      <h2>마음 전하기</h2>
      <div className={`${classes['heart__cont-wrap']}`}>
        <div className={`${classes['heart__cont']}`}>
          <div>{heartInfo.groom.self.name}</div>
          <div className={`${classes['heart__btn']}`}>
            <a href={`tel:${heartInfo.groom.self.telephone}`}>📞</a>
            <a href={`sms:${heartInfo.groom.self.telephone}`}>💌</a>
            <button>송금 팝업</button>
          </div>
        </div>
        <div className={`${classes['heart__cont']}`}>
        <div>{heartInfo.bride.self.name}</div>
          <div className={`${classes['heart__btn']}`}>
            <a href={`tel:${heartInfo.bride.self.telephone}`}>📞</a>
            <a href={`sms:${heartInfo.bride.self.telephone}`}>💌</a>
            <button>송금 팝업</button>
          </div>
        </div>
      </div>


      <a href='http://kko.to/T7HuzTh80'>
        <img src={require('../../assets/images/kakaopay.png')} alt='kakaopay'/>
      </a>
    </section>
  )
}

export default Heart;
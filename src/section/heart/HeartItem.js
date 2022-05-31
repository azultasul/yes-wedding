import React from 'react';

import classes from './Heart.module.scss';


const Heart = (props) => {

  return (
        <div className={`${classes['heart__cont']}`}>
          <div>{heartInfo.groom.self.name}</div>
          <div className={`${classes['heart__btn']}`}>
            <a href={`tel:${heartInfo.groom.self.telephone}`}>📞</a>
            <a href={`sms:${heartInfo.groom.self.telephone}`}>💌</a>
            <button>송금 팝업</button>
          </div>

          <a href='http://kko.to/T7HuzTh80'>
            <img src={require('../../assets/images/kakaopay.png')} alt='kakaopay'/>
          </a>
        </div>


  )
}

export default Heart;
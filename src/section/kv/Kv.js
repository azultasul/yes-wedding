import React from 'react';

import classes from './Kv.module.scss';


const Kv = (props) => {
  return (
    <section id='kv'>
      <div className={classes['kv']}>
        <div className={classes['kv__img-wrap']}>
          <img src={require('../../assets/images/kv.jpeg')} alt='kv' className={classes['kv__img']} />
        </div>
        <div className={classes['kv__cont']}>
          <div className={classes['kv__tit']}>윤여웅 <span className={classes['kv__tit-and']}>&</span> 유은솔</div>
          <div className={classes['kv__tit-sub']}>2022.00.00 Sat 12:00</div>
        </div>
      </div>
      <div className='section-flower'>💐</div>
      <div className={classes['cont-wrap']}>
        <div className={classes['cont']}>
          서로가 마주보며 다져온 사랑을<br/>
          이제 함께 한 곳을 바라보며<br/>
          걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br/>
          저희 두 사람이 사랑의 이름으로<br/>
          지켜나갈 수 있게 앞날을<br/>
          축복해 주시면 감사하겠습니다.<br/>
        </div>
        <div className={classes['cont']}>
          <div>윤여웅 ･ 유은솔<span className={classes['cont__thin']}>의 장남</span> 여웅</div>
          <div>윤여웅 ･ 유은솔<span className={classes['cont__thin']}>의 장녀</span> 은솔</div>
        </div>
        <div className={`${classes['cont']} ${classes['cont--place']}`}>
          <div>2022.12.12 토요일 오후 12시 00분</div>
          <div>상록아트홀 그랜드볼룸홀</div>
        </div>
      </div>
    </section>
  )
}

export default Kv;
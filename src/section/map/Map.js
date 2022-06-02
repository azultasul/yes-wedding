import React, { useEffect } from 'react';

import classes from './Map.module.scss';

const { kakao } = window;

const Map = (props) => {
  // console.log("kakao", kakao);
  useEffect(() => {
    const container = document.getElementById('map-cont'); //지도를 담을 영역의 DOM 레퍼런스
    const position = new kakao.maps.LatLng(33.450701, 126.570667)

    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: position, //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    const marker = new kakao.maps.Marker({
      position: position
    });
  
    const map = new kakao.maps.Map(container, options);
    marker.setMap(map);
  }, []);

  return (
    <section id='map'>
      <div className='section-tit'>🌷</div>
      <h2>오시는 길</h2>
      <div id="map-cont" className={classes.map__cont}></div>
      <div className={classes.map__btn}>
        <a href="//map.kakao.com/link/map/18577297">🚌카카오 지도</a>
        <a href="http://naver.me/5Z0vUHi3">🚗네이버 지도</a>
      </div>
    </section>
  )
}

export default Map;
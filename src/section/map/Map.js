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
      <div className='section-flower'>🌷</div>
      <h2>오시는 길</h2>
      <h3 className={classes['place']}>
        상록아트홀 L층 그랜드볼룸홀<br/>
        서울 강남구 언주로 508
      </h3>
      <div id="map-cont" className={classes.cont}></div>
      <div className={classes['btn-wrap']}>
        <a href="//map.kakao.com/link/map/18577297" className={classes['btn']}>
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.45026 0C4.27749 0 0 3.4 0 7.7C0 10.4 1.79058 12.8 4.37696 14.2L3.48168 17.6C3.48168 17.7 3.48168 17.8 3.58115 17.9C3.58115 17.9 3.68063 18 3.7801 18C3.87958 18 3.87958 18 3.97906 18L7.85864 15.3C8.4555 15.4 8.95288 15.4 9.54974 15.4C14.7225 15.4 19 11.9 19 7.7C18.9005 3.4 14.7225 0 9.45026 0Z" fill="#fae100"/>
          </svg>
          <span>카카오 지도</span>
        </a>
        <a href="http://naver.me/5Z0vUHi3" className={classes['btn']}>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 0V8.6L6.2 0H0V17H6.1V8.4L11.8 17H18V0H11.9Z" fill="#5ECC69"/>
          </svg>
          <span>네이버 지도</span>
        </a>
      </div>

      <div className={classes['info']}>
        <div className={classes['info__tit']}>자가용</div>
        <p className={classes['info__cont']}>
          • 네비게이션 이용시 : “서울상록회관” 또는 “서울시 강남구 언주로 508” 입력<br/>
          • 경부고속도로 : 양재IC 진입하시어 양재대로에서 매봉터널, 강남 세브란스 병원 방면으로 진입하여 직진<br/>
          ✔️주차장 : 상록아트홀 지상/지하 주차장 이용(1시간 30분 무료)<br/>
        </p>
        <div className={classes['info__tit']}>지하철</div>
        <p className={classes['info__cont']}>
          2호선/분당선 “선릉역” 5번출구 도보5분<br/>
          ✔️셔틀버스 수시운행 : 선릉역 5번출구<br/>
        </p>
        <div className={classes['info__tit']}>버스</div>
        <p className={classes['info__cont']}>
          (KT강남지사 하차) 간선 141, 지선 3422<br/>
          (서울상록회관, 한국기술센터 하차)<br/>
          간선 146, 360, 740<br/>
        </p>
      </div>
    </section>
  )
}

export default Map;
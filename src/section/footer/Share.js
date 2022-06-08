import React, { useEffect } from 'react';
import Modal from '../../components/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import classes from './Share.module.scss';


const Share = (props) => {
  const shareKaKao = () => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-share",
      templateId: 77876,
    });
  }
  const onShareKakaoClick = () => {
    shareKaKao();
  };
  useEffect(() => {
    shareKaKao();
  },[]);

  const copyHandler = () => {
    alert("링크 복사🤟");
  }
  return (
    <Modal onClose={props.onClose}>
      <div className={classes['share']}>
        <CopyToClipboard text="https://azultasul.github.io/yes-wedding">
          <button onClick={copyHandler} className={classes['share__btn']}>
            <div className={classes['share__img-wrap']}>
              <img className={classes['share__img']} src={require('../../assets/images/link.png')} alt='link copy'/>
            </div>
            <span className={classes['share__text']}>링크 복사</span>
          </button>
        </CopyToClipboard>
        <button id="kakao-share" onClick={onShareKakaoClick} className={classes['share__btn']}>
          <div className={classes['share__img-wrap']}>
            <img src={require('../../assets/images/kakaoShare.png')} alt='link copy'/>
          </div>
          <span className={classes['share__text']}>카카오톡 공유</span>
        </button>
      </div>
    </Modal>
  )
}

export default Share;
import React from 'react';
import Modal from '../../components/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// const { Kakao } = window;
import classes from './Share.module.scss';


const Share = (props) => {
  // useEffect(() => {
  //   window.Kakao.Link.createCustomButton({
  //     container: "#kakao-share",
  //     templateId: 77876,
  //   });
  //   console.log("useEffect");
  // },[]);
  // const shareKaKao = () => {
  //   console.log("shareKaKao");
  // }
  const onShareKakaoClick = () => {
    // window.Kakao.Link.sendCustom({
    //   container: "#kakao-share",
    //   templateId: 77876,
    // });
    // // shareKaKao();
    console.log("onShareKakaoClick");
  };

  const copyHandler = () => {
    alert("링크 복사🤟");
  }
  return (
    <Modal onClose={props.onClose}>
      <div className={classes['share']}>
        <button>큐알</button>
        <CopyToClipboard text="https://azultasul.github.io/yes-wedding">
          <button onClick={copyHandler}>링크 복사</button>
        </CopyToClipboard>
        <button id="kakao-share" onClick={onShareKakaoClick}>카카오</button>
      </div>
    </Modal>
  )
}

export default Share;
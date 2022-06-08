import React, { useRef } from 'react';

import classes from './SetGuest.module.scss';

const SetGuest = (props) => {
  const nameRef = useRef('');
  const passwordRef = useRef('');
  const messageRef = useRef('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const guestMessage = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      message: messageRef.current.value,
      time: getDate()
    }
    if (guestMessage.name === '') {
      alert("이름을 입력해주세요😥");
      return;
    } else if (guestMessage.password === '') {
      alert("비밀번호를 입력해주세요🙏");
      return;
    } else if (guestMessage.message === '') {
      alert("메시지를 입력해주세요😢");
      return;
    }
    props.onSetGuest(guestMessage);

    nameRef.current.value = '';
    passwordRef.current.value = '';
    messageRef.current.value = '';
  }
  const getDate = () => {
    const newDate = new Date();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    return `${month}월 ${date}일 ${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }
  getDate();
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes['cont__info']}>
        <label htmlFor="name"></label>
        <input type="text" id='name' placeholder='이름' ref={nameRef} className={classes['cont__name']}/>
        <label htmlFor="password"></label>
        <input type="text" id='password' placeholder='비밀번호' ref={passwordRef} className={classes['cont__password']}/>
      </div>
      <label htmlFor="message"></label>
      <textarea type="text" id='message' placeholder='메시지' ref={messageRef} className={classes['cont__message']}/>
      <button className={classes['cont__btn']}>방명록 작성</button>
    </form>
  )
}

export default SetGuest;
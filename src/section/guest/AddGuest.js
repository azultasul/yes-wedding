import React, { useRef } from 'react';

const AddGuest = (props) => {
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
    props.onAddGuest(guestMessage);

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
      <label htmlFor="name">이름</label>
      <input type="text" id='name' ref={nameRef}/>
      <label htmlFor="password">비밀번호</label>
      <input type="text" id='password' ref={passwordRef}/>
      <label htmlFor="message">메시지</label>
      <input type="text" id='message' ref={messageRef}/>
      <button>방명록 작성</button>
    </form>
  )
}

export default AddGuest;
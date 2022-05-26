import React, { useRef } from 'react';

import Modal from '../../components/Modal';
// import AddGuest from './AddGuest';
// import classes from './Modal.module.scss';


const EnterPassword = (props) => {
  const passwordRef = useRef('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 비밀번호 validation
    // passwordRef.current.value 
    console.log("test", props.currentGuest.password, passwordRef.current.value);
    if (props.currentGuest.password === passwordRef.current.value) {
      if (props.type === 'update') {
        console.log("update");
      } else if (props.type === 'delete') {
        console.log("delete", props.currentGuest);
        const url = `https://yes-wedding-default-rtdb.firebaseio.com/guest.json/${props.currentGuest.id}`

        fetch(url, { method: 'DELETE' });
        // const data = await response.json();
      }
      // 방명록 작성 모달(current.value있는 상태)
    } else {
      alert("비밀번호가 틀립니다🥲");
      passwordRef.current.value = '';
    }
  };

  return (
    <Modal onClose={props.onSetPassModal}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="password">비밀번호</label>
        <input type="text" id='password' ref={passwordRef}/>
        <button>확인</button>
      </form>
    </Modal>
  );
};

export default EnterPassword;
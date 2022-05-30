import React, { useState, useRef } from 'react';
import { getDatabase, ref, set, remove } from "firebase/database";

import Modal from '../../components/Modal';
import SetGuest from './SetGuest';
// import classes from './Modal.module.scss';


const EnterPassword = (props) => {
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const passwordRef = useRef('');
  const currentGuest = props.currentGuest;
  const database = getDatabase();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentGuest.password === passwordRef.current.value) {
      if (props.type === 'update') {
        setIsUpdateForm(true);
      } else if (props.type === 'delete') {
        deleteGuestHandler();
      }
    } else {
      alert("비밀번호가 틀립니다🥲");
      passwordRef.current.value = '';
    }
  };

  const updateGuestHandler = (guest) => {
    set(ref(database, 'guest/' + currentGuest.id), guest);
    props.onFetchGuestHandler();
    props.onSetPassModal();
  };
  const deleteGuestHandler = () => {
    remove(ref(database, 'guest/' + currentGuest.id));
    props.onFetchGuestHandler();
    alert("삭제 성공🤟");
    props.onSetPassModal();
  };

  const passwordForm = (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="password">비밀번호</label>
      <input type="text" id='password' ref={passwordRef}/>
      <button>확인</button>
    </form>
  )

  return (
    <Modal onClose={props.onSetPassModal}>
      { isUpdateForm ? 
        <SetGuest onSetGuest={updateGuestHandler} /> : 
        passwordForm }
    </Modal>
  );
};

export default EnterPassword;
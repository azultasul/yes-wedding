import React from 'react';
import ReactDom from 'react-dom';

import Modal from '../../components/Modal';
// import classes from './Modal.module.scss';


const GuestList = (props) => {
  const sliderContent = props.guestList.map(guest => (
    <div key={guest.id}>
      <div>{guest.name}</div>
      <div>{guest.message}</div>
      <div>{guest.time}</div>
    </div>
  ));

  return (
    <Modal onClose={props.onHideList}>
      {sliderContent}
      <button onClick={props.onHideList}>닫기</button>
    </Modal>
  );
};

export default GuestList;
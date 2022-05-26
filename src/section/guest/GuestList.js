import React, { useState } from 'react';
// import ReactDom from 'react-dom';

import EnterPassword from './EnterPassword';
import Modal from '../../components/Modal';
// import classes from './Modal.module.scss';


const GuestList = (props) => {
  const [passModalIsShown, setPassModalIsShown] = useState({openState: false, type: null});
  const [currentGuest, setCurrentGuest] = useState({});

  const sliderContent = props.guestList.map(guest => (
    <div key={guest.id}>
      <div>{guest.name}</div>
      <div>{guest.message}</div>
      <div>{guest.time}</div>

      <button onClick={() => {
        setPassModal(true, 'update') 
        setCurrentGuest(guest)
      }}>🖍</button>
      <button onClick={() => {
        setPassModal(true, 'delete') 
        setCurrentGuest(guest)
      }}>🗑</button>
    </div>
  ));
  

  const setPassModal = (openState, type) => {
    setPassModalIsShown({openState: openState, type: type});
    console.log("openState", openState, type);
  }

  return (
    <Modal onClose={props.onHideList}>
      {passModalIsShown.openState 
        ? <EnterPassword onSetPassModal={() => {setPassModal(false, null)}} type={passModalIsShown.type} currentGuest={currentGuest} /> 
        : sliderContent}
    </Modal>
  );
};

export default GuestList;
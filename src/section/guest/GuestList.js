import React, { useState } from 'react';
// import ReactDom from 'react-dom';

import EnterPassword from './EnterPassword';
import Modal from '../../components/Modal';

import classes from './GuestList.module.scss';


const GuestList = (props) => {
  const [passModalIsShown, setPassModalIsShown] = useState({openState: false, type: null});
  const [currentGuest, setCurrentGuest] = useState({});

  const sliderContent = props.guestList.map(guest => (
    <div className={classes['list-wrap']} key={guest.id}>
      <div className={classes['list__name']}>{guest.name}</div>
      <div className={classes['list__message']}>{guest.message}</div>
      <div className={classes['list__time']}>{guest.time}</div>

      <div className={classes['btn-wrap']}>
        <button onClick={() => {
          setPassModal(true, 'update')
          setCurrentGuest(guest)
        }} className={classes['btn']}>
          <img src={require('../../assets/images/pencil.png')} alt='paper card'/>
        </button>
        <button onClick={() => {
          setPassModal(true, 'delete')
          setCurrentGuest(guest)
        }} className={classes['btn']}>
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V4L7 4V3C7 2.73478 7.10536 2.48043 7.29289 2.29289ZM15 3V4L19 4C19.5523 4 20 4.44772 20 5C20 5.55229 19.5523 6 19 6H18V19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7957 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19L2 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H5V3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.31607 7.20435 0 8 0H12C12.7956 0 13.5587 0.316071 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3ZM9 10C9 9.44771 8.55228 9 8 9C7.44771 9 7 9.44771 7 10V16C7 16.5523 7.44771 17 8 17C8.55228 17 9 16.5523 9 16V10ZM12 9C11.4477 9 11 9.44771 11 10V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V10C13 9.44771 12.5523 9 12 9Z" fill="#222"/>
          </svg>
        </button>
      </div>
    </div>
  ));
  

  const setPassModal = (openState, type) => {
    setPassModalIsShown({openState: openState, type: type});
  }

  return (
    <Modal onClose={props.onHideList}>
      {passModalIsShown.openState 
        ? <EnterPassword onSetPassModal={() => {setPassModal(false, null)}} onFetchGuestHandler={props.onFetchGuestHandler} type={passModalIsShown.type} currentGuest={currentGuest} /> 
        : sliderContent}
    </Modal>
  );
};

export default GuestList;
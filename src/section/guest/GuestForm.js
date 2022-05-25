import React from 'react';
import ReactDom from 'react-dom';

import Modal from '../../components/Modal';
import AddGuest from './AddGuest';
// import classes from './Modal.module.scss';


const GuestForm = (props) => {
  return (
    <Modal onClose={props.onHideForm}>
      <div>방명록 작성</div>
      <AddGuest onAddGuest={props.onAddGuest} />
    </Modal>
  );
};

export default GuestForm;
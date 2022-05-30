import React from 'react';

import Modal from '../../components/Modal';
import SetGuest from './SetGuest';
// import classes from './Modal.module.scss';


const GuestForm = (props) => {
  return (
    <Modal onClose={props.onHideForm}>
      <div>방명록 작성</div>
      <SetGuest onSetGuest={props.onSetGuest} />
    </Modal>
  );
};

export default GuestForm;
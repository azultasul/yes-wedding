import React from 'react';

import Modal from '../../components/Modal';
import SetGuest from './SetGuest';
import classes from './GuestForm.module.scss';


const GuestForm = (props) => {
  return (
    <Modal onClose={props.onHideForm}>
      <div className={classes['cont-wrap']}>
        {/* <div>방명록 작성</div> */}
        <SetGuest onSetGuest={props.onSetGuest} />
      </div>
    </Modal>
  );
};

export default GuestForm;
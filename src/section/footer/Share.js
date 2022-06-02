import React from 'react';
import Modal from '../../components/Modal';

// import classes from './Footer.module.scss';


const Footer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <button>큐알</button>
      <button>링크</button>
      <button>카카오</button>
    </Modal>
  )
}

export default Footer;
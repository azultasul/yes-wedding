import React from 'react';
import Modal from '../../components/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import classes from './Account.module.scss';


const Account = (props) => {
  const account = props.account
  const copyHandler = () => {
    alert('복사 완료!!');
  }
  const kakao = (
    <a href={account.kakao} className={classes['account__btn']}>
      <img src={require('../../assets/images/kakaopay.png')} alt='kakaopay'/>
    </a>
  )
  const accountItem = (
    <div className={classes['account']}>
      <div className={classes['account__num']}>
        <div>{account['account-num']}</div>
        <div className={classes['account__inr']}>
          <div>{account['account-bank']}은행&nbsp;/&nbsp;</div>
          <div>{account['account-name']}</div>
        </div>
      </div>
      <div className={classes['account__btn-wrap']}>
        <CopyToClipboard className={classes['account__btn']} text={`${account['account-bank']} ${account['account-num']} ${account['account-name']}`}>
          <button onClick={copyHandler}>복사하기</button>
        </CopyToClipboard>
        {account.kakao && kakao}
      </div>
    </div>
  )
  return (
    <Modal onClose={props.onClose}>
      {accountItem}
    </Modal>
  )
}

export default Account;
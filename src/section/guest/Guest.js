import React, { useEffect, useState, useCallback } from 'react';
import GuestCard from './GuestCard';
import GuestForm from './GuestForm';
import GuestList from './GuestList';
// import firebase from '../../util/firebase';
// import AddGuest from './AddGuest';

import classes from './Guest.module.scss';

const Guest = () => {
  console.log("Guest");
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState(null);
  const [listIsShown, setListIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);

  // const guestRef = firebase.database().ref('guest');
  // console.log("guestRef", guestRef);

  const fetchGuestHandler = useCallback( async () => {
    setError(null);
    try {
      const response = await fetch('https://yes-wedding-default-rtdb.firebaseio.com/guest.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const guestList = [];

      for (const key in data) {
        guestList.push({
          id: key,
          name: data[key].name,
          password: data[key].password,
          message: data[key].message,
          time: data[key].time
        })
      };

      setGuests(guestList);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchGuestHandler();
  }, [fetchGuestHandler]);

  const addGuestHandler = async (guest) => {
    // const response = 
    await fetch('https://yes-wedding-default-rtdb.firebaseio.com/guest.json', {
      method: 'POST',
      body: JSON.stringify(guest),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = await response.json();
    fetchGuestHandler();
    // console.log("data", data);
  }

  const showFormHandler = () => {
    setFormIsShown(true);
  }
  const hideFormHandler = () => {
    setFormIsShown(false);
  }
  const showListHandler = () => {
    setListIsShown(true);
  }
  const hideListHandler = () => {
    setListIsShown(false);
  }
  return (
    <section>
      <h2>방명록</h2>
      <div className={classes.cards}>
        {error ? <p>{error}</p> : <GuestCard guestList={guests} />}
      </div>
      <div className={classes.btn}>
        <button onClick={showListHandler}>전체보기</button>
        <button onClick={showFormHandler}>방명록 작성</button>
      </div>
      {listIsShown && <GuestList onHideList={hideListHandler} guestList={guests} />}
      {formIsShown && <GuestForm onHideForm={hideFormHandler} onAddGuest={addGuestHandler} />}
    </section>
  )
}

export default Guest;
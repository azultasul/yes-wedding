import React, { useEffect, useState, useCallback } from 'react';
import { getDatabase, ref, push, set, child, get } from "firebase/database"; 

import GuestCard from './GuestCard';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

import classes from './Guest.module.scss';

const Guest = (props) => {
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState(null);
  const [listIsShown, setListIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);
  const database = getDatabase();

  const fetchGuestHandler = useCallback(() => {
    setError(null);
    get(child(ref(database), `guest/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

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

      } else {
        setError("No data available");
      }
    }).catch((error) => {
      setError(error.message);
    });
  }, []);

  const addGuestHandler = (guest) => {
    set(push(ref(database, 'guest')), guest);

    fetchGuestHandler();
    setFormIsShown(false);
  }

  useEffect(() => {
    fetchGuestHandler();
  }, [fetchGuestHandler]);


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
      {listIsShown && <GuestList onHideList={hideListHandler} guestList={guests} onFetchGuestHandler={fetchGuestHandler} />}
      {formIsShown && <GuestForm onHideForm={hideFormHandler} onSetGuest={addGuestHandler} />}
    </section>
  )
}

export default Guest;
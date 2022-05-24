import React, { useEffect, useState, useCallback } from 'react';
import GuestCard from './GuestCard';
import AddGuest from './AddGuest';

import classes from './Guest.module.scss';

const Guest = () => {
  console.log("Guest");
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState(null);

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
    const response = await fetch('https://yes-wedding-default-rtdb.firebaseio.com/guest.json', {
      method: 'POST',
      body: JSON.stringify(guest),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    fetchGuestHandler();
    // console.log("data", data);
  }
  return (
    <section>
      <h2>방명록</h2>
      <div className={classes.cards}>
        {error ? <p>{error}</p> : <GuestCard guestList={guests} />}
      </div>
      <div className={classes.btn}>
        <button>전체보기</button>
        <button>방명록 작성</button>
      </div>
      <AddGuest onAddGuest={addGuestHandler} />
    </section>
  )
}

export default Guest;
import React from 'react';
import GuestCard from './GuestCard';

const Guest = () => {
  return (
    <section>
      <h2>방명록</h2>
      <GuestCard />
      <div>
        <button>전체보기</button>
        <button>방명록 작성</button>
      </div>
    </section>
  )
}

export default Guest;
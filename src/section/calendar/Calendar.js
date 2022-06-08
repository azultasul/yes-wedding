import React from 'react';

import classes from './Calendar.module.scss';

const Calendar = (props) => {
  let text = '';
  const getDday = () => { 
    const today = new Date();
    const dday = new Date(2022,12 - 1,12);
    const gap = dday.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24))

    if (result > 0) {
      text = `${result}일 남았습니다.`
    } else if (result < 0) {
      text = `${-result}일 지났습니다.`
    } else if (result === 0) {
      text = '오늘입니다.😍'
    }
  }
  getDday();
  
  return (
    <section>
      <div className={`${classes['date']}`}>
        <div className={`${classes['date__day']}`}>12월 12일</div>
        <div className={`${classes['date__time']}`}>토요일 오후 12시 00분</div>
      </div>
      <div className={`${classes['calendar']}`}>
          <div className={`${classes['calendar__head']}`}>SUN</div>
          <div className={`${classes['calendar__head']}`}>MON</div>
          <div className={`${classes['calendar__head']}`}>TUE</div>
          <div className={`${classes['calendar__head']}`}>WED</div>
          <div className={`${classes['calendar__head']}`}>THU</div>
          <div className={`${classes['calendar__head']}`}>FRI</div>
          <div className={`${classes['calendar__head']}`}>SAT</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div className={`${classes['calendar__item-wrap']}`}>
            <span className={`${classes['calendar__item']}`}>12</span>
          </div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
      </div>
      <div className={`${classes['count']}`}>
        여웅 <span className={`${classes['count__heart']}`}>♥︎</span> 은솔의 결혼식이 {text}
      </div>
    </section>
  );
};

export default Calendar;
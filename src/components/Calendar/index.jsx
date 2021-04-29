import React from "react";
import Day from "./Day";
import Month from "./Month";
import Weekdays from "./Month/Week/Weekdaynames";
import styles from "./Calendar.module.scss";

const Calendar = ({ currentDate }) => {
  return (
    <article className={styles.wrapper}>
      <div><Day currentDate={currentDate} /></div>
      <div className={styles.calendar}>
        <Weekdays />
      <Month date={currentDate} currentDate={currentDate} />
      </div>
    </article>
  );
};
export default Calendar;

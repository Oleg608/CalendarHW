import React from "react";
import PropTypes from "prop-types";
import { eachWeekOfInterval, startOfMonth, endOfMonth } from "date-fns";
import Week from "./Week";

const getWeeksMonth = ({ date, currentDate }) =>
  eachWeekOfInterval(
    {
      start: startOfMonth(date),
      end: endOfMonth(date),
    },
    { weekStartsOn: 1 }
  ).map((weekDate) => (
    <Week
      key={weekDate}
      weekDate={weekDate}
      date={date}
      currentDate={currentDate}
    />
  ));

const Month = (props) => getWeeksMonth(props);
Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

Month.defaultProps = {
  currentDate: new Date(),
};

export default Month;

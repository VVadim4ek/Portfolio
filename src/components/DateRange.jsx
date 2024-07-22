/*
    File: DateRange.jsx
    Author: Vadym Lidovskyi
    Copyright: 2023 - Vadym Lidovskyi https://edpark.space
    Version: 1.0
*/

import PropTypes from "prop-types";
import DateTimeStamp from "./DateTimeStamp";

DateRange.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
};

export default function DateRange({ startDate, endDate }) {
  return (
    <p className="w-[100%] text-center">
      <DateTimeStamp date={startDate} /> – <DateTimeStamp date={endDate} />
    </p>
  );
}

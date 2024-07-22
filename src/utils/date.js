/*
    File: date.js
    Author: Vadym Lidovskyi
    Copyright: 2023 - Vadym Lidovskyi https://edpark.space
    Version: 1.0
*/

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function isDateValid(date) {
  return !isNaN(date) && date instanceof Date;
}

export function formatDateForTimeTag(date) {
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export function getCopyrightYear() {
  return new Date().getFullYear();
}

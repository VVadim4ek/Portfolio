/*
    File: uniqueid.js
    Author: Vadym Lidovskyi
    Copyright: 2023 - Vadym Lidovskyi https://edpark.space
    Version: 1.0
*/

let uniqueId = 0;

export default function getUniqueId(prefix = "id") {
  uniqueId++;
  return `${prefix}${uniqueId}`;
}

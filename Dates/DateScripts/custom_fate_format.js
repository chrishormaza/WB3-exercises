"use strict";
const currentDate = new Date();
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const weekday = weekdayNames[currentDate.getDay()];

const formattedDate = day + "-" + month + "-" + year + "(" + weekday + ")";

console.log(formattedDate);
"use strict";

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msecPerDay = 1000 * 60 * 60 * 24;

let elapsedtime = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedtime / msecPerDay;
let result = Math.round(dayDiff);

console.log(result)
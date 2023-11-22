"use strict";

const myBirthday = new Date();
myBirthday.setMonth(0);
myBirthday.setDate(1);
myBirthday.setFullYear(1996);

const momBirthday = new Date();
momBirthday.setMonth(3); 
momBirthday.setDate(15);
momBirthday.setFullYear(1967);

const dadBirthday = new Date(1955, 2, 12);

console.log("My birthday: " + myBirthday.toLocaleString());
console.log("Mom's birthday: " + momBirthday.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" }));
console.log("Dad's birthday: " + dadBirthday.toLocaleString());
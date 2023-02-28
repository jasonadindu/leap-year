'use strict';

let year = "(input year)";
let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
}
console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`);
console.log();


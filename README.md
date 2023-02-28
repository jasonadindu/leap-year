# leap-year

## Tutorial to Check for Leap Year

```JavaScript``` is one the most used programming languages that enables you to create dynamically updating content,
control multimedia, animate images, and much more.For this tutorial we will be using ```JavaScript``` to write a simple 
program that checks if a given year is a leap year.

A leap year is a year containing one additional day added to keep the calendar year synchronized with the astronomical
or seasonal year. Because seasons and astronomical events do not repeat in a whole number of days, calendars that have
the same number of days in each year drift over time with respect to the event that the year is supposed to track.
By inserting an additional day or month into the year, the drift can be corrected. A year that is not a leap year is called
a common year.

### To determine whether a year is a leap year, follow these steps :

We will be using a ```TRUE``` or ```FALSE``` Boolean conditional statement in our program. A leap year is evenly divisible 
by ```4```but not by ```100```,or divisible by ```400```. If the above condition is ```TRUE```, then let our program display output
result ```is a leap year``` but if the condtion is ```FALSE```, then let our program display output result ```is not a leap year```
The year is a leap year if it has ```366``` years and not a leap year if it has ```365``` days

```javascript
let year = "(input year)";
let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
}
console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`);
console.log();


```
### Testing the Program
Input any year in the ```input year``` section on the first line of code and run it. After test running with so many examples on the program,
you should be able to see your output result after each run. If the output is either ```is a leap year``` or ```is not a leap year``` , that
means the program is working fine. 
If you encounter an ```error``` in your program, feel free to reach to me. I will respond as soon as I can.



### References
- [What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Leap Year Test](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php)

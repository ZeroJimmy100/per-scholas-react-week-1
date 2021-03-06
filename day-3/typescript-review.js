"use strict";
exports.__esModule = true;
var readline = require('readline');
var SUNNY_DAY_MESSAGE = "It is sunny out today!";
var isSunny = true;
var numberSunnyDays = 1;
function hello(name, isSunny) {
    if (!isSunny) {
        return "Hi, " + name;
    }
    return "Hi, " + name + " it is sunny out today!";
}
/**
 *
 * @param isSunny
 *  If *today* it is sunny or not
 * @param numberSunnyDays
 *  how many days in a row it has been sunny for.
 * @returns
 *  Returns a string saying Hi, if it's sunny, and how many days it has been sunny for.
 *  Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */
// TO DO:
// 1. Complete sunnyDayMessage so it works. Then pass it data and call the function!
// 2. Use console.log to print the string sunnyDayMessage return
function sunnyDaysMessage(isSunny, numberSunnyDays) {
    if (!isSunny && numberSunnyDays < 1) {
        var numberOfNotSunnyDays = Math.abs(numberSunnyDays);
        return "Hi! It is not sunny today. It has been not sunny for " + numberOfNotSunnyDays + " in a row";
    }
    else if (isSunny && numberSunnyDays < 1)
        return 'Please enter a higher POSITIVE number!!!';
    return "Hi! It is sunny Today. It has been sunny for " + numberSunnyDays + " in a row";
}
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var numberOfSunnyDays = 0;
r1.question("How many days has been sunny?", function (answer) {
    numberOfSunnyDays = answer;
    console.log(sunnyDaysMessage(false, numberOfSunnyDays));
    r1.close();
});

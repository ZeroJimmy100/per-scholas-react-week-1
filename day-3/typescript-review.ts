const readline = require('readline');

const SUNNY_DAY_MESSAGE: string = "It is sunny out today!";
let isSunny: boolean = true;

let numberSunnyDays = 1;

function hello(name: string, isSunny: boolean){
    if(!isSunny){
        return "Hi, " + name;
    }
    return `Hi, ${name} it is sunny out today!`;
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

 ​
 // TO DO:
 // 1. Complete sunnyDayMessage so it works. Then pass it data and call the function!
 // 2. Use console.log to print the string sunnyDayMessage return

function sunnyDaysMessage(isSunny: boolean, numberSunnyDays: number): string{
    
    if(!isSunny && numberSunnyDays < 1){
        const numberOfNotSunnyDays = Math.abs(numberSunnyDays);
        return `Hi! It is not sunny today. It has been not sunny for ${numberOfNotSunnyDays} in a row`;
    }
    else if(isSunny && numberSunnyDays < 1) return 'Please enter a higher POSITIVE number!!!';

    return `Hi! It is sunny Today. It has been sunny for ${numberSunnyDays} in a row`;
}

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfSunnyDays = 0;

r1.question("How many days has been sunny?", (answer) => {
    numberOfSunnyDays = answer;
    console.log(sunnyDaysMessage(false, numberOfSunnyDays));
    r1.close();
});









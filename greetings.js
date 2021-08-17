console.log("hi!!");

/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
*/
/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

const greetingWords = ["hello", "hi", "Hey"];
const prefixes = ["my", "his", "her", "their"];

function greeting(name, gender, isSelf) {
    // do stuff here ...
    
    let genderArr = ["Male", "Female", "Nonbinary"];
    let myPrefix = "";

    let new_name = name.toLowerCase().replace(/\b\w{1,}/g, function(str){
           return str.charAt(0).toUpperCase() + str.slice(1);
    });

    let new_greetings = greetingWords[1].replace(/[A-Za-z]/, function(str){
           return str.charAt(0).toUpperCase() + str.slice(1);
    });

    let new_gender = gender.replace(/\w.*/, function(str){
           return str.charAt(0).toUpperCase() + str.slice(1);
    });

    if(!genderArr.includes(new_gender)) return "Gender needs to be either male, female or nonbinary!";

    
    if(isSelf){ 
           myPrefix = prefixes[0]
    }
    else if(new_gender == genderArr[0]){
           myPrefix = prefixes[1];
    }
    else if(new_gender == genderArr[1])
    {
           myPrefix = prefixes[2];
    }
    else{
           myPrefix = prefixes[3];
    }
    return  `${new_greetings}, ${myPrefix} name is ${new_name}`; // use template literal for string to return
  }

  const message = greeting("Adam", "male", true);
  console.log(message); // hi, my name is name 
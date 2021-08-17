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

const greetingWords = ["hello", "hi", "Hey"];
const prefixes = ["my", "his", "her", "their"]

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
    // do stuff here ...
    let new_name = name.toLowerCase().replace(/\b\w{1,}/g, function(str){
           return str.charAt(0).toUpperCase() + str.slice(1);
    });

    new_greetings = greetingWords[1].replace(/[A-Za-z]/, function(str){
           return str.charAt(0).toUpperCase() + str.slice(1);
    })

    let message = "";

    if(gender == "male"){
          message = `${new_greetings}, ${prefixes[0]} is ${new_name}`;
    }
    else if(gender == "female")
    {
           message = `${new_greetings}, ${prefixes[2]} is ${new_name}`; 
    }
    else{
           message = `${new_greetings}, ${prefixes[3]} is ${new_name}`;
    }
    return  message; // use template literal for string to return
  }

  const message = greeting("Adam", "alien", true);
  console.log(message); // hi, my name is name 
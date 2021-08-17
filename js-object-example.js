// npm init to get package.json file

const myInfo = {
    "name": "Adam",
    "birthday": 08191983,
    "citiesLivedIn": ["Chicago", "Los Angeles"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
        "favoriteFood": "hamburger",
    }
};

console.log("my info printed as object");
console.log(myInfo);

console.log("my info printed as a string in the json format");
const myInfoAsJSON = JSON.stringify(myInfo);
console.log(myInfoAsJSON); 
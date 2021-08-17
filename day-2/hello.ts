const getFive = () => 5;

console.log("getFive", getFive());

const anotherWeatherDescription = (isItSunny: boolean) => 
    isItSunny ? "sunny" : "cloudy";

const getWeatherDescription = (isItSunny: boolean) => {
    if(isItSunny){
        return "sunny";
    }
    return "cloudy";
}

type WeatherDescription = "sunny"|"cloudy";
type Callback = (a: boolean) => WeatherDescription; 


function sayHello(name: string, isSunny: boolean, getWeatherCallback: Callback): string {
    let messageIntro: string = "Good day";
    const weather = getWeatherCallback(isSunny);

    const completedMessage = `${messageIntro}, ${name}, It is ${weather}`;  
    return completedMessage;
}

console.log(sayHello("Jill", true, getWeatherDescription));
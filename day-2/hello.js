var getFive = function () { return 5; };
console.log("getFive", getFive());
var anotherWeatherDescription = function (isItSunny) {
    return isItSunny ? "sunny" : "cloudy";
};
var getWeatherDescription = function (isItSunny) {
    if (isItSunny) {
        return "sunny";
    }
    return "cloudy";
};
function sayHello(name, isSunny, getWeatherCallback) {
    var messageIntro = "Good day";
    var weather = getWeatherCallback(isSunny);
    var completedMessage = messageIntro + ", " + name + ", It is " + weather;
    return completedMessage;
}
console.log(sayHello("Jill", true, getWeatherDescription));

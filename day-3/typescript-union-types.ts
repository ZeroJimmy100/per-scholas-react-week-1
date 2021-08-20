// union types 
type IS_SUNNY = "sunny";

// This is a type alias which uses union types

type ValidSunnyDayMessages = "sunny" | "rainy";

type WeatherKeyWord = "sunny" | "rainy";

type WeatherDescription = {
    keyword: WeatherKeyWord;
    description: string;
    intensity: string;
}

function makeWeatherDescription(weatherKeyword){
    let description;
    if("sunny")
    {
        description = "The sun is shining";
    }

    if("rainy")
    {
        description = "The sun is not shining. It is raining";
    }

    const descriptionObject: WeatherDescription = {
        keyword: weatherKeyword,
        description: description,
    }

    return descriptionObject;
}

function getValidSunnyDayMessage(isItSunny: boolean): ValidSunnyDayMessages{
    if(isItSunny)
    {
        return "rainy";
    }

    return "sunny";
}

type SunnyDayMessage = string | boolean;

let sunnyDayMessage: SunnyDayMessage;

function getSunnyDayMessage(isItSunny): SunnyDayMessage{
    if(!isItSunny)
    {
        return false;
    }

    return "it is sunny!";
}

sunnyDayMessage = getSunnyDayMessage(false);
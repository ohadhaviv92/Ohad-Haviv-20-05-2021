

export function getCurrentWeather(city) {
    const weather = [
        {
            "LocalObservationDateTime": "2021-05-19T10:55:00+03:00",
            "EpochTime": 1621410900,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 26.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 79,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/current-weather/212514?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/ginnaton/212514/current-weather/212514?lang=en-us"
        }
    ]


    return Promise.resolve({ city, weather: weather[0] });
}


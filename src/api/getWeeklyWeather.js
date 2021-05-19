export function getWeeklyWeather(cityKey) {
    const fiveDays = {
        "Headline": {
            "EffectiveDate": "2021-05-22T08:00:00+03:00",
            "EffectiveEpochDate": 1621659600,
            "Severity": 4,
            "Text": "Pleasant this weekend",
            "Category": "mild",
            "EndDate": null,
            "EndEpochDate": null,
            "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/extended-weather-forecast/212514?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2021-05-19T07:00:00+03:00",
                "EpochDate": 1621396800,
                "Temperature": {
                    "Minimum": {
                        "Value": 19.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 29.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2021-05-20T07:00:00+03:00",
                "EpochDate": 1621483200,
                "Temperature": {
                    "Minimum": {
                        "Value": 21,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 29.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2021-05-21T07:00:00+03:00",
                "EpochDate": 1621569600,
                "Temperature": {
                    "Minimum": {
                        "Value": 19.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 28.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 38,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2021-05-22T07:00:00+03:00",
                "EpochDate": 1621656000,
                "Temperature": {
                    "Minimum": {
                        "Value": 18.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 25.2,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 36,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=4&unit=c&lang=en-us"
            },
            {
                "Date": "2021-05-23T07:00:00+03:00",
                "EpochDate": 1621742400,
                "Temperature": {
                    "Minimum": {
                        "Value": 18.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 25.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/ginnaton/212514/daily-weather-forecast/212514?day=5&unit=c&lang=en-us"
            }
        ]
    }

    return Promise.resolve(fiveDays.DailyForecasts)
}
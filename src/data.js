

const city = {
  "Version": 1,
  "Key": "212514",
  "Type": "City",
  "Rank": 75,
  "LocalizedName": "Ginnaton",
  "EnglishName": "Ginnaton",
  "PrimaryPostalCode": "",
  "Region": {
    "ID": "MEA",
    "LocalizedName": "Middle East",
    "EnglishName": "Middle East"
  },
  "Country": {
    "ID": "IL",
    "LocalizedName": "Israel",
    "EnglishName": "Israel"
  },
  "AdministrativeArea": {
    "ID": "M",
    "LocalizedName": "Central District",
    "EnglishName": "Central District",
    "Level": 1,
    "LocalizedType": "District",
    "EnglishType": "District",
    "CountryID": "IL"
  },
  "TimeZone": {
    "Code": "IDT",
    "Name": "Asia/Jerusalem",
    "GmtOffset": 3,
    "IsDaylightSaving": true,
    "NextOffsetChange": "2021-10-30T23:00:00Z"
  },
  "GeoPosition": {
    "Latitude": 31.964,
    "Longitude": 34.914,
    "Elevation": {
      "Metric": {
        "Value": 85,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 278,
        "Unit": "ft",
        "UnitType": 0
      }
    }
  },
  "IsAlias": false,
  "SupplementalAdminAreas": [],
  "DataSets": [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "ForecastConfidence"
  ]
}

const autocomplete = [
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    {
      "Version": 1,
      "Key": "3431644",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Telanaipura",
      "Country": {
        "ID": "ID",
        "LocalizedName": "Indonesia"
      },
      "AdministrativeArea": {
        "ID": "JA",
        "LocalizedName": "Jambi"
      }
    },
    {
      "Version": 1,
      "Key": "300558",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Telok Blangah New Town",
      "Country": {
        "ID": "SG",
        "LocalizedName": "Singapore"
      },
      "AdministrativeArea": {
        "ID": "05",
        "LocalizedName": "South West"
      }
    },
    {
      "Version": 1,
      "Key": "325876",
      "Type": "City",
      "Rank": 51,
      "LocalizedName": "Telford",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "TFW",
        "LocalizedName": "Telford and Wrekin"
      }
    },
    {
      "Version": 1,
      "Key": "169072",
      "Type": "City",
      "Rank": 51,
      "LocalizedName": "Telavi",
      "Country": {
        "ID": "GE",
        "LocalizedName": "Georgia"
      },
      "AdministrativeArea": {
        "ID": "KA",
        "LocalizedName": "Kakheti"
      }
    },
    {
      "Version": 1,
      "Key": "230611",
      "Type": "City",
      "Rank": 51,
      "LocalizedName": "Telsiai",
      "Country": {
        "ID": "LT",
        "LocalizedName": "Lithuania"
      },
      "AdministrativeArea": {
        "ID": "TE",
        "LocalizedName": "Telšiai"
      }
    },
    {
      "Version": 1,
      "Key": "2723742",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Telégrafo",
      "Country": {
        "ID": "BR",
        "LocalizedName": "Brazil"
      },
      "AdministrativeArea": {
        "ID": "PA",
        "LocalizedName": "Pará"
      }
    },
    {
      "Version": 1,
      "Key": "186933",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Tela",
      "Country": {
        "ID": "HN",
        "LocalizedName": "Honduras"
      },
      "AdministrativeArea": {
        "ID": "AT",
        "LocalizedName": "Atlántida"
      }
    },
    {
      "Version": 1,
      "Key": "3453754",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Telaga Asih",
      "Country": {
        "ID": "ID",
        "LocalizedName": "Indonesia"
      },
      "AdministrativeArea": {
        "ID": "JB",
        "LocalizedName": "West Java"
      }
    },
    {
      "Version": 1,
      "Key": "3453755",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Telagamurni",
      "Country": {
        "ID": "ID",
        "LocalizedName": "Indonesia"
      },
      "AdministrativeArea": {
        "ID": "JB",
        "LocalizedName": "West Java"
      }
    }
  ]


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

const fiveDays =  {
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

  module.exports= {
    city:city,
    autocomplete:autocomplete,
    weather:weather,
    fiveDays:fiveDays
  }  
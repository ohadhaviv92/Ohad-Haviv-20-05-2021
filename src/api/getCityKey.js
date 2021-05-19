export function getCityKey(location) {
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

    ///const results = await Promise.allSettled(["x", "y", "z"].map(_=> _));

    return Promise.resolve(city);
}
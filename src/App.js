import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import {city , autocomplete ,fiveDays, weather} from './data' 
import DayWeather from "./CurrentWeather";

//const url5days = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/212514?apikey=gnBQ9AmRvdYqsh30nYGQ0kA22GN0SKWZ&metric=true" 

export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  const [citya, setCitya] = useState(null);
  const [fiveDaysW, setFiveDaysW] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async function(position) {
        // await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=0B6K5ar9SAnAcKQMsGpak3HE7pqSulqz&q=${position.coords.latitude}%2C${position.coords.longitude}`)
        // .then(res => res.json())
        // .then(result => {
        //   console.log(result);


setCitya(city)
         console.log(city.Key)
          
        //   await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=0B6K5ar9SAnAcKQMsGpak3HE7pqSulqz`)
        //   .then(res => res.json())
        //   .then(result => {
        //     console.log(result);
        
        setFiveDaysW(fiveDays)
            setCurrentCity(weather[0])
            
        //   });

        // });
        //setLat(position.coords.latitude);
        //setLong(position.coords.longitude);
      });

     
    }
    fetchData();
  }, [lat,long])

  return (
   <div> 
    { currentCity? 
<Weather weatherData={{...currentCity,...citya}} />
: null } 
{  fiveDaysW ? fiveDaysW.DailyForecasts.map((day) => {
        return <DayWeather weatherData={day} />
    }) : null }

 </div> 
    
);
}

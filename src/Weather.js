import React from 'react';
import { useEffect, useState } from "react";
import { getCurrentWeather, getWeeklyWeather } from './api';
import CitiesAutocomplete from './CitiesAutocomplete';
import CurrentWeather from './CurrentWeather';
import DayWeather from './DayWeather';

function Weather(props) {


  const [currentWeather, setCurrentWeather] = useState(null)
  const [fiveDays, setFiveDays] = useState([])


  useEffect(() => {
    getCurrentWeather(props.data).then(current => setCurrentWeather(current));
    getWeeklyWeather(props.data.Key).then(days => setFiveDays(days));
  }, []);

  return (
    <>
      <CitiesAutocomplete />
      {currentWeather ? <CurrentWeather weatherData={currentWeather} /> : <h1>Loader</h1>}
      {fiveDays.map(day => <DayWeather weatherData={day} />)}
    </>
  )
}

export default Weather;
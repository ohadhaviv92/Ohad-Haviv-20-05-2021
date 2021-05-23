import React from 'react';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap'
import { getCurrentWeather, getWeeklyWeather } from './api';
import CitiesAutocomplete from './CitiesAutocomplete';
import CurrentWeather from './CurrentWeather';
import DayWeather from './DayWeather';
import { useSelector, useDispatch } from 'react-redux'
import {
  addCityToFavorites,
} from './actions/index';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';


function Weather({ city }) {
  const dispatch = useDispatch()
  const [currentWeather, setCurrentWeather] = useState(null)
  const [weekly, setWeekly] = useState([])

  useEffect(() => {
    getCurrentWeather(city).then(current => setCurrentWeather({ city, weather: current })); // add catch
    getWeeklyWeather(city.Key).then(setWeekly);
  }, [city]);

  return <Grid container direction="column"
    alignItems="center"
    justify="center">
    <div style={{ width: '60%' }}>
      <CitiesAutocomplete />
    </div>
    <h1>Today</h1>
    {currentWeather ? <CurrentWeather weatherData={currentWeather} /> : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}
    <h1>Weekly Weather</h1>

    <Grid container spacing={0}
      direction="row"
      alignItems="center"
      justify="space-around"
    >
      {weekly.map((day, index) => <DayWeather weatherData={day} key={index} />)}
    </Grid>
  </Grid>;
}

export default Weather;


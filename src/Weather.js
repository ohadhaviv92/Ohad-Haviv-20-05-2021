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



function Weather(props) {

  const dispatch = useDispatch()
  const [currentWeather, setCurrentWeather] = useState(null)
  const [fiveDays, setFiveDays] = useState([])

  const toogleFavorite = () => {
    dispatch(addCityToFavorites(props.city))
  }

  useEffect(() => {
    getCurrentWeather(props.city).then(current => setCurrentWeather(current));
    getWeeklyWeather(props.city.Key).then(days => { console.log(days); setFiveDays(days.data.DailyForecasts) });
  }, [props.city]);

  return (

    <Grid container direction="column"
      alignItems="center"
      justify="center">

      <div style={{ width: '60%' }}>
        <CitiesAutocomplete />
      </div>
      {currentWeather ? <CurrentWeather weatherData={currentWeather} toogleFavorite={toogleFavorite} favorites={false} /> : <h1>Loader</h1>}
      <h1>Weekly Weather</h1>

      <Grid container spacing={0}
        direction="row"
        alignItems="center"
        justify="space-around"
      >
        {fiveDays.map((day, index) => <DayWeather weatherData={day} key={index} />)}
      </Grid>
    </Grid>

  )
}

export default Weather;


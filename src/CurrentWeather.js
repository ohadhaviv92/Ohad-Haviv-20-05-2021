
import React from 'react';
import { Card } from 'react-bootstrap'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import {
  changeCity,
  weatherScreen,
} from './actions/index';
import Grid from '@material-ui/core/Grid';


function CurrentWeather(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [isFavorites, setIsFavorites] = useState(favorites.findIndex(city => city.Key == props.weatherData.city.Key) != -1)


  useEffect(() => {
    setIsFavorites(favorites.findIndex(city => city.Key == props.weatherData.city.Key) != -1)
  }, [favorites, props]);

  const digit = props.weatherData.weather.WeatherIcon < 10 ? "0" : "";
  const imgUrl = "https://developer.accuweather.com/sites/default/files/" + digit + props.weatherData.weather.WeatherIcon + "-s.png";

  return (
    <Card
      bg="light"
      key={11}
      text={props.weatherData.weather.WeatherText}
      style={{ width: '18rem' }}
      className="mb-2"
      onClick={(event) => { dispatch(changeCity(props.weatherData.city)); props.favorites && dispatch(weatherScreen()) }}
    >
      <Grid container
        justify="space-between">
        <Card.Title>{props.weatherData.city.LocalizedName}  </Card.Title>
        {props.favorites ? null : isFavorites ? <MdFavorite size={25} onClick={(event) => { console.log(event); props.toogleFavorite() }} /> : <MdFavoriteBorder onClick={(event) => { console.log(event); props.toogleFavorite() }} size={25} />}
      </Grid>
      <Card.Body>
        <Card.Img variant="bottom" src={imgUrl} />
        <Card.Title> {props.weatherData.weather.Temperature.Metric.Value + ' ' + props.weatherData.weather.Temperature.Metric.Unit} </Card.Title>
        <Card.Text>
          {props.weatherData.weather.WeatherText}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default CurrentWeather;
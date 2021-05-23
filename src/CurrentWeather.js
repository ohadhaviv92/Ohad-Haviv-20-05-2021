import React from 'react';
import { Card } from 'react-bootstrap'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import {
  changeCity,
  weatherScreen,
  addCityToFavorites,
} from './actions/index';
import Grid from '@material-ui/core/Grid';


function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32
  return fahrenheit.toFixed(1);
}




function CurrentWeather({ weatherData: { city, weather }, isFavScreen }) {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const temperatureUnit = useSelector(state => state.unit);
  const [isFavorites, setIsFavorites] = useState(favorites.findIndex(data => data.Key == city.Key) != -1)


  const toogleFavorite = () => {
    dispatch(addCityToFavorites(city))
  }

  useEffect(() => {
    setIsFavorites(favorites.findIndex(data => data.Key == city.Key) != -1)
  }, [favorites, city]);

  const digit = weather.WeatherIcon < 10 ? "0" : ""; // fix two digit 
  const imgUrl = "https://developer.accuweather.com/sites/default/files/" + digit + weather.WeatherIcon + "-s.png";
  const temperature = temperatureUnit ? weather.Temperature.Metric.Value + ' ' + weather.Temperature.Metric.Unit : convertToF(weather.Temperature.Metric.Value) + ' F';



  return (
    <Card
      bg="light"
      key={11}
      text={weather.WeatherText}
      style={{ width: '18rem' }}
      className="mb-2"
      onClick={() => { dispatch(changeCity(city)); isFavScreen && dispatch(weatherScreen()) }} // const
    >
      <Grid container
        justify="space-between">
        <Card.Title>{city.LocalizedName}  </Card.Title>
        {isFavScreen ? null : isFavorites ? <MdFavorite size={25} onClick={toogleFavorite} /> : <MdFavoriteBorder onClick={toogleFavorite} size={25} />}
      </Grid>
      <Card.Body>
        <Card.Img variant="bottom" src={imgUrl} />
        <Card.Title> {temperature} </Card.Title>
        <Card.Text>
          {weather.WeatherText}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default CurrentWeather;
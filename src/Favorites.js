import { useEffect, useState } from "react";
import { getCurrentWeather } from "./api";
import CurrentWeather from './CurrentWeather';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeCity,
  weatherScreen,
  addCityToFavorites,
} from './actions/index';
import { useHistory } from "react-router-dom";


export default function Favorites() {

  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [favoritesWeather, setFavoritesWeather] = useState([])

  useEffect(async () => {
    const results = await Promise.all(favorites.map(city => getCurrentWeather(city).then(weather => ({ city, weather }))));
    setFavoritesWeather(results)

  }, [favorites]);


  const onCityClick = (city) => {
    dispatch(changeCity(city))
    history.push("/")

  }

  return (

    <Grid container direction="column"
      alignItems='center'
      justify="space-between">
      <h1>Favorites</h1>
      <Grid container direction="row" justify="space-around">
        {favoritesWeather ? favoritesWeather.map((city, index) => <CurrentWeather weatherData={city} key={index} action={onCityClick} isFavScreen={true} />) : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}
      </Grid>
    </Grid>

  )


}
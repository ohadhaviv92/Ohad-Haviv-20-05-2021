
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentWeather } from "./api";
import CurrentWeather from './CurrentWeather';
import Grid from '@material-ui/core/Grid';

export default function Favorites() {

  const favorites = useSelector(state => state.favorites);
  const [favoritesWeather, setFavoritesWeather] = useState([])

  useEffect(async () => {
    const results = await Promise.all(favorites.map(city => getCurrentWeather(city).then(weather => ({ city, weather }))))
    setFavoritesWeather(results)
  }, [favorites]);



  return (

    <Grid container direction="column"
      alignItems='center'
      justify="space-between">
      <h1>Favorites</h1>
      <Grid container direction="row" justify="space-around">
        {favoritesWeather ? favoritesWeather.map((city, index) => <CurrentWeather weatherData={city} key={index} favorites={true} />) : <h1> loader </h1>}
      </Grid>
    </Grid>

  )


}
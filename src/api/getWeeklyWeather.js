import axios from 'axios';
import { toast } from 'react-toastify';
export function getWeeklyWeather(cityKey) {

    let url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + process.env.REACT_APP_API_KEY + "&metric=true";
    return axios.get(url).catch(err => toast.error(err.message))
}

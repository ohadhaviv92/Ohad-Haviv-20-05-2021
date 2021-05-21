import axios from 'axios';
import { toast } from 'react-toastify';
export async function getCurrentWeather(city) {

    var url = 'https://dataservice.accuweather.com/currentconditions/v1/' + city.Key + '?apikey=' + process.env.REACT_APP_API_KEY ;
    const data = await axios.get(url).catch(err => toast.error(err.message))
    return Promise.resolve({ city, weather: data.data[0] });

}


import axios from 'axios';
import { toast } from 'react-toastify';


export function getCityKey(coords) {

    var url = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + process.env.REACT_APP_API_KEY + "&q=" + coords.latitude + "%2C " + coords.longitude;

    return axios.get(url).catch(err => toast.error(err.message))
}
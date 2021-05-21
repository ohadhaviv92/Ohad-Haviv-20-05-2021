import axios from 'axios';
import { toast } from 'react-toastify';
export function getOptions(query) {

    let url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + process.env.REACT_APP_API_KEY + "&q=" + query ;
    return axios.get(url).catch(err => toast.error(err.message))
    
}
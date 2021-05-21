import { getCityKey } from "./getCityKey";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(async loocation => {
            const city = await getCityKey(loocation.coords);

            resolve(city.data);
        });
    });
}
import { getCityKey } from "./getCityKey";

export function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(async loocation => {
            const city = await getCityKey(loocation);
            resolve(city);
        });
    });
}
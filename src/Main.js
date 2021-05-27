import { useEffect } from "react";
import { getUserLocation } from "./api";

import Weather from './Weather';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeCity,
    initFavorites,
} from './actions/index';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';


export default function Main() {
    const dispatch = useDispatch();
    const currentCity = useSelector(state => state.currentCity); //city by user location or select 

    useEffect(() => {
        if (!currentCity) {
         getUserLocation().then(location => dispatch(changeCity(location))).catch(err => toast.error("getUserLocation failed"));
        }
    }, []);

    const favorites = useSelector(state => state.favorites);

    useEffect(() => { //save favorites
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);


    return (
        <div>

            <Grid container direction="column"
                alignItems="center"
                justify="center">
                {currentCity ? <Weather city={currentCity} /> : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}
            </Grid>
        </div>
    )
}
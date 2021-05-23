import { useEffect } from "react";
import { getUserLocation } from "./api";
import Menu from "./Menu";
import Favorites from './Favorites';
import Weather from './Weather';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeCity,
    initFavorites,
} from './actions/index';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';

const getFromLocalStroage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

export default function Main() {
    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen); // weather or favorites screen
    const currentCity = useSelector(state => state.currentCity); //city by user location or select 

    useEffect(() => {
        dispatch(initFavorites(getFromLocalStroage("favorites")));
        getUserLocation().then(location => dispatch(changeCity(location))).catch(err => toast.error("getUserLocation failed")); 
    }, []);

    const favorites = useSelector(state => state.favorites);

    useEffect(() => { //save favorites
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);


    return (
        <div>
            <Menu />
            <Grid container direction="column"
                alignItems="center"
                justify="center">
                {screen === "favorite" ? <Favorites /> : currentCity ? <Weather city={currentCity} /> : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}
            </Grid>
        </div>
    )
}
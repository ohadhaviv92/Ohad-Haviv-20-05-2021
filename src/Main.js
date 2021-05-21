import { useEffect, useState } from "react";
import { getUserLocation } from "./api";
import { Navbar, Nav } from "react-bootstrap";
import Favorites from './Favorites';
import Weather from './Weather';
import { useSelector, useDispatch } from 'react-redux'
import {
    changeCity,
    favoriteScreen,
    weatherScreen,
}
    from './actions/index';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
const getFromLocalStroage = (key) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : data;
}

export default function Main() {


    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);
    const currentCity = useSelector(state => state.currentCity);
    const [favorites, setFavorites] = useState(getFromLocalStroage("favorites") || []);

    useEffect(() => localStorage.setItem("favorites", JSON.stringify(favorites)), [favorites]);
    useEffect(() => {
        getUserLocation().then(location => dispatch(changeCity(location))).catch(err => toast.error("getUserLocation failed"));
    }, []);


    return (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Herolo Weather Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => dispatch(weatherScreen())}>Home</Nav.Link>
                        <Nav.Link onClick={() => dispatch(favoriteScreen())} >Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        <Grid container direction="column"
                alignItems="center"
                justify="center">
            {screen === "favorite" ? <Favorites /> : currentCity ? <Weather city={currentCity} /> : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}

        </Grid>
     </div > 
    )

}
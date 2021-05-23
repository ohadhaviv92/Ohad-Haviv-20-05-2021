import { useEffect } from "react";
import { getUserLocation } from "./api";
import { Navbar, Nav } from "react-bootstrap";
import Favorites from './Favorites';
import Weather from './Weather';
import { useSelector, useDispatch } from 'react-redux'
import {
    changeCity,
    favoriteScreen,
    weatherScreen,
    toggleUnit,
    initFavorites,
} from './actions/index';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Switch from "react-switch";
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';

const getFromLocalStroage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

export default function Main() {
    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);
    const unit = useSelector(state => state.unit);
    const currentCity = useSelector(state => state.currentCity);

    useEffect(() => {
        dispatch(initFavorites(getFromLocalStroage("favorites")));
        getUserLocation().then(location => dispatch(changeCity(location))).catch(err => toast.error("getUserLocation failed"));
    }, []);

    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);




    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Herolo Weather Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => dispatch(weatherScreen())}>Home</Nav.Link>
                        <Nav.Link onClick={() => dispatch(favoriteScreen())} >Favorites</Nav.Link>
                        <Switch onColor={'#6f42c1'} offColor={'#888'} checkedIcon={<RiCelsiusLine />} uncheckedIcon={<RiFahrenheitLine />} onChange={() => { dispatch(toggleUnit()) }} checked={unit} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Grid container direction="column"
                alignItems="center"
                justify="center">
                {screen === "favorite" ? <Favorites /> : currentCity ? <Weather city={currentCity} /> : <Loader type="Rings" color="#6f42c1" height="100" width="100" />}

            </Grid>
        </div>
    )

}
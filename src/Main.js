import { useEffect, useState } from "react";
import { getUserLocation } from "./api";
import { Navbar, Nav } from "react-bootstrap";
import Favorites from './Favorites';
import Weather from './Weather';

const getFromLocalStroage = (key) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : data;
}

export default function Main() {
    const [component, setComponent] = useState("weather");
    const [currentCity, setCurrentCity] = useState(null);
    const [favorites, setFavorites] = useState(getFromLocalStroage("favorites") || []);

    useEffect(() => localStorage.setItem("favorites", JSON.stringify(favorites)), [favorites]);
    useEffect(() => {
        getUserLocation().then(location => setCurrentCity(location));
    }, []);

    const toggleFavorite = cityId => {
        const index = favorites.findIndex(id => id === cityId);

        if (index === -1) return setFavorites([...favorites, cityId]);

        setFavorites([...favorites.filter(_ => _ !== cityId)]);
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Herolo Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => setComponent("weather")}>Home</Nav.Link>
                        <Nav.Link onClick={() => setComponent("favorite")} >Favorite</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {component === "favorite" ? <Favorites /> : currentCity ? <Weather data={currentCity} /> : <h1>loader</h1>}

        </div>
    )

}
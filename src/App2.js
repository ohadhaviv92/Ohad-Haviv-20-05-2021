import Weather from "./Weather";
import SearchAutocomplete from './SearchAutocomplete'
import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from 'mui-autocomplete';
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import { Autocomplete } from '@material-ui/lab';
import auto from './CitiesAutocomplete'
function App2() {
  const [position, setPosition] = useState({});

  const API_KEY = "gnBQ9AmRvdYqsh30nYGQ0kA22GN0SKWZ";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const API_BASE_URL = "http://api.openweathermap.org/";
  const [searchValue, setSearchValue] = useState("")
  const queryCountries = (a) => [{id:1, name:"Test 1"}, {id:2, name:"Test 2"}]
const setValue = (a) =>  "as"

  const [predictions,setPredictions] = useState(auto[0].LocalizedName)
  useEffect(async () => {
    const geo = navigator.geolocation;
    if (!geo) {
      console.log("error");
      return;
    }
    geo.getCurrentPosition(
      (data) => {
        console.log(data.coords);
        //setPosition(data.coords);

//var url =  `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${data.coords.latitude},${data.coords.longitude}`
var url =  'http://dataservice.accuweather.com/currentconditions/v1/1?apikey=0B6K5ar9SAnAcKQMsGpak3HE7pqSulqz'
        // const locations = axios
        //   .get(
        //    url
        //   )
        //   .then((response) => {
        //     // handle success
        //     console.log(response);
        //   }).catch(error => {
        //     console.log(error);

        //   });

        setPosition(data.coords);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#memes">Favorite</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {position.latitude}
      

      <Autocomplete
      options={[{id:1, name:"Test 1"}, {id:2, name:"Test 2"}]}
      keyProp={o => o.id}
      textProp={o => o.name}
      onChange={(e, v) => setValue(v)}
    />
/>

      <Weather />
    </>
  );
}

export default App2;

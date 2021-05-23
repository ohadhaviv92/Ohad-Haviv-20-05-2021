
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import {
    favoriteScreen,
    weatherScreen,
    toggleUnit,
} from './actions/index';
import Switch from "react-switch";
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';

export default function Menu() {
    const dispatch = useDispatch();
    const unit = useSelector(state => state.unit);

    return (
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
    )

}

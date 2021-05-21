import { Card } from 'react-bootstrap';
import moment from 'moment';

export default function DayWeather(props) {

    const digit = props.weatherData.Day.Icon < 10 ? "0" : ""; 
    const imgUrl = "https://developer.accuweather.com/sites/default/files/" + digit + props.weatherData.Day.Icon + "-s.png";

    return (
        <Card
            bg="light"
            key={11}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Body>
                <Card.Title> {moment(props.weatherData.Date).format('dddd')} </Card.Title>
                <Card.Img variant="bottom" src={imgUrl} />
                <Card.Title> {props.weatherData.Temperature.Maximum.Value + ' ' + props.weatherData.Temperature.Maximum.Unit} </Card.Title>
                <Card.Text>
                    {props.weatherData.Day.IconPhrase}
                </Card.Text>
            </Card.Body>
        </Card >

    )

}
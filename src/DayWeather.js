import { Card } from 'react-bootstrap';
import moment from 'moment';
import { useSelector } from 'react-redux';

//Convert from celsius to fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit.toFixed(1);
}

export default function DayWeather({ weatherData: { Day, Temperature, Date: date } }) {

    const unit = useSelector(state => state.unit);

    const digit = Day.Icon < 10 ? "0" : "";
    const imgUrl = "https://developer.accuweather.com/sites/default/files/" + digit + Day.Icon + "-s.png";
    const temperature = unit ? Temperature.Maximum.Value + ' ' + Temperature.Maximum.Unit : convertToF(Temperature.Maximum.Value) + ' F';

    return (
        <Card
            bg="light"
            key={11}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Body>
                <Card.Title> {moment(date).format('dddd')} </Card.Title>
                <Card.Img variant="bottom" src={imgUrl} />
                <Card.Title> {temperature} </Card.Title>
                <Card.Text>
                    {Day.IconPhrase}
                </Card.Text>
            </Card.Body>
        </Card >

    )

}
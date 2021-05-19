
import React from 'react';
import { Card } from 'react-bootstrap'


function CurrentWeather(props) {

  const img = require(`./icon/${props.weatherData.weather.WeatherIcon}.png`)

  return (
    <Card
      bg="light"
      key={11}
      text={props.weatherData.weather.WeatherText}
      style={{ width: '18rem' }}
      className="mb-2"
    >

      <Card.Header>{props.weatherData.city.LocalizedName}

      </Card.Header>

      <Card.Body>
        <Card.Img variant="bottom" src={img.default} />
        <Card.Title> {props.weatherData.weather.Temperature.Metric.Value + ' ' + props.weatherData.weather.Temperature.Metric.Unit} </Card.Title>
        <Card.Text>
          {props.weatherData.weather.WeatherText}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default CurrentWeather;
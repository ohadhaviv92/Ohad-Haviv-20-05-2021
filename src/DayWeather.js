
export default function DayWeather(props) {

    console.log(props.weatherData)
    return <h1> {props.weatherData.Date} </h1>

}
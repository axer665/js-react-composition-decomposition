//Информационный блок прогноза погоды
export default function WeatherForecast(props) {
    const { href, url, temp, text, title} = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <a className="weather-forecast" href={href}>
                <span className="weather-image" style={ {backgroundImage: 'url(' + url + ')'} }></span>
                {temp}
                <p className="weather-text">{text}</p>
            </a>
        </>
    )
}
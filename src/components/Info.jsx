//Информационные блоки различных типов

import Visit from "./info/Visit";
import LocationMap from "./info/LocationMap";
import TVprogram from "./info/TVprogram";
import Broadcast from "./info/Broadcast";
import WeatherForecast from "./info/WeatherForecast";

export default function InfoBloks(props) {
    const {infoBlocks} = props

    return (
        infoBlocks.map(item => {
            return <div className={'info-block ' + item.type} key={item.type}>
                {
                    item.type === 'weather' ? <WeatherForecast {...item}/> :
                    item.type === 'visit' ? <Visit {...item}/> :
                    item.type === 'map' ? <LocationMap {...item}/> :
                    item.type === 'TVprogram' ? <TVprogram {...item}/> :
                    item.type === 'broadcast' ? <Broadcast {...item}/> :
                    null
                }
            </div>
        })
    )
}
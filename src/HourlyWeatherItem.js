import React from 'react'

function HourlyWeatherItem(props) {
    const date = new Date(props.time)
    return (
        <div className='app-main-weather-list-weather-element'>
            <div>{date.getHours()+":" + (date.getMinutes()<10?'0':'') + date.getMinutes()}</div>
            <img src={props.image} alt="weather icon"/>
            <div>{Math.floor(props.temp -273.15)}°C</div>
      </div>
    )
}

export default HourlyWeatherItem

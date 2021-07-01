import React from 'react'

function MainWeather(props) {
    return (
        <div className='app-main-weather'>
          <img 
            className='app-main-weather-image'
            src={props.image}
            alt="weather icon"
          />
          <div className='app-main-weather-description'>
            {props.description}
          </div>
          <div className='app-main-weather-temperature'>
            <b>Temperature</b> {props.minTemp}°C to {props.maxTemp}°C
          </div>
          <div className='app-main-weather-details'>
            <div className='app-main-weather-details-Humidity'>
              <b>Humidity</b> {props.humidity}%
            </div>
            <div className='app-main-weather-details-Pressure'>
              <b>Pressure</b> {props.pressure}
            </div>
          </div>
        </div>
    )
}

export default MainWeather

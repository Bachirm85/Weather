import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';

function HourlyWeather(props) {
  // console.log('Object', props)
    return (
        <div className='app-main-weather-list'>
          {props.list.map((item,index) => {
                if (index < 7)
                return <HourlyWeatherItem time={item.dt_txt} temp={item.main.temp} key={index} image={props.getImage(item.weather[0].id)}/>
               }
               
            )}
        </div>
    )
}

export default HourlyWeather

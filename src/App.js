import NavBar from './NavBar';
import MainWeather from './MainWeather';
import HourlyWeatherList from './HourlyWeatherList';
import './App.css';
import fakeWeatherData from './fakeWeatherData.json';
import React from 'react';
import storm from "./img/weather-icons/storm.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import clear from "./img/weather-icons/clear.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {weather: null, country:'Beirut' };
  }

  handleCountryChange= async(country)=>{
    // console.log(country)
    this.setState({country}, ()=> this.getWeatherData());
  }

  getWeatherData = async()=>{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.country}&cnt=8&appid=df85b6dd592e2835a950418e18c09453`)
    const result = await response.json();
    this.setState({weather: result});
  }

  async componentDidMount(){
    this.getWeatherData();
    
  }

  imagesChecker = id => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    }
  };

  render (){
  // console.log(Math.floor(fakeWeatherData.list[0].main.temp - 273.15));
  return (
    <div className="App">
      <NavBar handleCountryChange={this.handleCountryChange}/>

      <main className='app-main'>
        {this.state.weather && ( <>
        <MainWeather 
            image={this.imagesChecker(this.state.weather.list[0].weather[0].id)}
            minTemp={Math.floor(this.state.weather.list[0].main.temp_min - 273.15)} 
            maxTemp={Math.floor(this.state.weather.list[0].main.temp_max - 273.15)} 
            humidity={this.state.weather.list[0].main.humidity} 
            pressure={this.state.weather.list[0].main.pressure} 
            description={this.state.weather.list[0].weather[0].description} 
        />
       
        <HourlyWeatherList 
            list={this.state.weather.list} getImage={this.imagesChecker}
        
        /></>)}
        
      </main>
    </div>
  );
}


//   componentWillMount(){
// console.log('componentWillMount')  
// }
}

export default App;

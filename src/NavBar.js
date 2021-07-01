import React from 'react'

class NavBar extends React.Component {
    state={
        countryValue:''
    }

    handleInputChange = (e)=>{
        const countryValue = e.target.value
        this.setState({countryValue})
    }

    render() {
  
    return (
        <div className='app-navbar'>
            <input 
            className='app-navbar-input'
            type='text'
            placeholder='Type in a city name'
            value={this.state.countryValue}
            onChange={this.handleInputChange}
            />
            <button
            className='app-navbar-button'
            onClick={()=>this.props.handleCountryChange(this.state.countryValue)}
            >   
            Find Weather
            </button>
        </div>
    )
}
}
export default NavBar

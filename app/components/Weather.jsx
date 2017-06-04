import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(city) {
    var that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(city).then(function(data){
      that.setState({
        city: data.name,
        temp: data.temp,
        isLoading: false
      });
    }, function(message){
      that.setState({
        isLoading: false
      });
      alert(message);
    });
  };
  render() {
    var {isLoading, city, temp} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3>Fetching weather ...</h3>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }
    return (
      <div>
        <h1>Get weather</h1>
        <WeatherForm onSearch={this.handleSearch} city={this.state.city}/>
        {renderMessage()}
      </div>
    );
  }
};

export default Weather;

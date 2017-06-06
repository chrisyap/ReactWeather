import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
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
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(city).then(function(data){
      that.setState({
        city: data.name,
        temp: data.temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  };
  render() {
    var {isLoading, city, temp, errorMessage} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather ...</h3>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get weather</h1>
        <WeatherForm onSearch={this.handleSearch} city={this.state.city}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};

export default Weather;

import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=df1677d406708cc6c5343092d65188ab&units=metric';
// df1677d406708cc6c5343092d65188ab
//
module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location)
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var data = [];
        data.temp = res.data.main.temp;
        data.name = res.data.name;
        return data;
      }
    },function(res){
      // debugger;
      throw new Error(res.data.message);
      // throw new Error('City not found');
    });
  }
}

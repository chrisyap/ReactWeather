import React from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    var city = this.state.city;
    if (city.length > 0) {
      this.props.onSearch(city);
      console.log(city);
    }
  };
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} placeholder="Enter city"/>
        <button className="button hollow expanded large">Get weather</button>
      </form>
    )
  }
}

export default WeatherForm;

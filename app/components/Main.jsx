import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

var Main = (props) => {
  return (
    <main>
      <h1>Main component</h1>
      <Switch>
       <Route exact path='/' component={Weather}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/examples' component={Examples}/>
      </Switch>
    </main>
  )
}

export default Main;

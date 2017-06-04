import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import Main from 'Main';
import Nav from 'Nav';

ReactDOM.render((
  <HashRouter>
    <div>
      <Nav />
      <Main />
    </div>
  </HashRouter>
), document.getElementById('app'));

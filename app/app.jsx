import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import Main from 'Main';
import Nav from 'Nav';

// load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

ReactDOM.render((
  <HashRouter>
    <div>
      <Nav />
      <Main />
    </div>
  </HashRouter>
), document.getElementById('app'));

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
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <Main />
        </div>
      </div>
    </div>
  </HashRouter>
), document.getElementById('app'));

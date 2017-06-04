import React from 'react';
import {NavLink} from 'react-router-dom';

var Nav = (props) => {
  return (
    <div>
      <h4>Navigation</h4>
      <NavLink exact to="/" activeClassName="is-active" activeStyle={{fontWeight: 'bold'}}>Get weather</NavLink>
      <NavLink to="/about" activeClassName="is-active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to="/examples" activeClassName="is-active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
    </div>
  )
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Sydney">Sydney, Australia</Link>
        </li>
        <li>
          <Link to="/?location=Tokyo">Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  );
}

export default Examples;

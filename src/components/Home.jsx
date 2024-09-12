import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home Screen</h1>
    <nav>
      <ul>
        <li><Link to="/screen1">Go to Screen 1</Link></li>
        <li><Link to="/screen2">Go to Screen 2</Link></li>
        <li><Link to="/screen3">Go to Screen 3</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;

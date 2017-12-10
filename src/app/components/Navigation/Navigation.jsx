import React from 'react';
import './Navigation.scss';

const Navigation = () => (
  <nav className="level nav">
    <li className="level-item nav__item">
      <a href="/some" className="link nav__link">Home</a>
    </li>
    <li className="level-item nav__item">
      <a href="/some" className="link nav__link">Favorites</a>
    </li>
  </nav>
);

export default Navigation;


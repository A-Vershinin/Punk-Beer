import React from 'react';
import "./Navigation.scss";

class Navigation extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className="level nav">
        <li className="level-item nav__item">
          <a href="#" className="link nav__link">Home</a>
        </li>
        <li className="level-item nav__item">
          <a href="#" className="link nav__link">Favorites</a>
        </li>
      </nav>
    )
  }
}

export default Navigation;


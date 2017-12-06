import React from 'react';
import "./Nav.scss";

class Nav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Favorites</a>
        </li>
      </nav>
    )
  }
}

export default Nav;

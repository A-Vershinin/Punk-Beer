import React from 'react';
import Nav from "../Nav/Nav";
import "./Header.scss";


class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header className="header">
        <h1 className="header__logo">{this.props.title}</h1>
        <Nav />
      </header>
    )
  }
}

// Header.PropTypes = {
//   title: React.PropTypes.string
// };

export default Header;

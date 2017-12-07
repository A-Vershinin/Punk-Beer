import React from 'react';
import Nav from "../Navigation/Navigation";
import "./Header.scss";
import { Level } from 'reactbulma';



class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header className="header">
        <div className="container level">
          <Level.Left>
            <h1 className="title is-1 header__title">{this.props.title}</h1>
          </Level.Left>
          <Level.Right>
            <Nav />
          </Level.Right>
        </div>
      </header>
    )
  }
}

// Header.PropTypes = {
//   title: React.PropTypes.string
// };

export default Header;



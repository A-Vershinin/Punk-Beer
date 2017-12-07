import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  title: PropTypes.string
};

export default Header;



import React from 'react';
import PropTypes from 'prop-types';
import "./Pagination.scss";


class Pagination extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div className="pagin">
        <ul className="pagin__List">
          {
            this.props.allLinks.map((item, index) => {
              return (<li key={index} className="pagin__item">
              <a key={index} href="#" className="pagin__link"
                onClick={() => this.props.onLinkClick(index+1)}>{item}</a>
              </li>)
            })
          }
        </ul>
      </div>
    )
  }
}


Pagination.propTypes = {
  allLinks: PropTypes.array.isRequired,
  onLinkClick: PropTypes.func.isRequired
};

export default Pagination;


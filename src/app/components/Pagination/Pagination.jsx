import React from 'react';
import PropTypes from 'prop-types';
import "./Pagination.scss";


class Pagination extends React.Component {
  constructor (props) {
    super(props);
  }

  getArrLinks(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr;
  }


  getLinks(arr) {
    return Math.ceil(arr.length / this.props.numberItemsShow);
  }

  render() {
    const defaultArr = this.props.items;

    // linksOnPage - сколько всего страниц
    const linksOnPage = this.getLinks(defaultArr);

    // allLinks - массив нужной длинны с номерами страниц
    const allLinks = this.getArrLinks(linksOnPage);


    return (
      <div className="pagin">
        <ul className="pagin__List">
          {
            allLinks.map((item, index) => {
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
  items: PropTypes.array.isRequired,
  numberItemsShow: PropTypes.number.isRequired,
  onLinkClick: PropTypes.func.isRequired
};

export default Pagination;


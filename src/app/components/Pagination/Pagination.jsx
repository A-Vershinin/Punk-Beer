import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../Pagination/Pagination.scss';

class Pagination extends React.Component {
  getArrLinks(number) {
    const arr = [];
    for (let i = 1; i <= number; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  getLinks(totalItems) {
    return Math.ceil(totalItems / this.props.numberItemsShow);
  }

  render() {
    // linksOnPage - сколько всего страниц
    const linksOnPage = this.getLinks(this.props.totalItems);

    // allLinks - массив нужной длинны с номерами страниц
    const allLinks = this.getArrLinks(linksOnPage);

    const page = this.props.pageActive; // номер страницы

    return (
      <div className="pagin">
        <ul className="pagin__List">
          {
             allLinks.map((item, index) => (
               <li key={index} className="pagin__item">
                 <NavLink
                   activeClassName="pagin__link--active"
                   key={index}
                   to={`/list/${index+1}`}
                   className={`pagin__link ${page === index + 1 ? 'pagin__link--active' : '' } `}
                   onClick={() => this.props.onLinkClick(index + 1)}
                 >{item}
                 </NavLink>
               </li>
             ))
          }
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  numberItemsShow: PropTypes.number.isRequired,
  pageActive: PropTypes.number,
  onLinkClick: PropTypes.func.isRequired,
};

export default Pagination;


import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import Item from '../Item/Item';

const List = (props) => (
  <ul className="list">
    {
      props.data.map(elem => (
        <Item
          key={elem.id}
          src={elem.image_url}
          name={elem.name}
          time={elem.first_brewed}
          desc={elem.description}
          rating={elem.attenuation_level}
        />
      ))
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import "./List.scss";
import Item from "../Item/Item";


class List extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul className="list">
        {
          this.props.data.map(elem => {
            return (
              <Item key={elem.id} src={elem.image_url} name={elem.name} time={elem.first_brewed}
                    desc={elem.description} rating={elem.attenuation_level}
              />
            );
          })
        }
      </ul>
    );
  }
}


List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })).isRequired
};

export default List;

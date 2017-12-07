import React, { PropTypes }  from 'react';
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
                    desc={elem.description} volume={elem.boil_volume.value}
              />
            );
          })
        }
        </ul>
    );
  }
}

// List.PropTypes = {
//   data: React.PropTypes.arrayOf(React.PropTypes.shape({
//     src: React.PropTypes.string.isRequired,
//     name: React.PropTypes.string.isRequired,
//     desc: React.PropTypes.string.isRequired,
//   })).isRequired,
// };


export default List;

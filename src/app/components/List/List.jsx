import React from 'react';
import "./List.scss";


class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="list__item">
      <div className="list__left">
        <div className="list__image">
          <img src={this.props.src} alt="Картинка"/>
        </div>
      </div>
      <div className="list__right">
        <h2 className="list__title">{this.props.name}</h2>
        <p className="list__desc">{this.props.desc}</p>
      </div>
    </li>
  }
}



class List extends React.Component {
	constructor(props) {
		super(props);
    this.state = { items: this.props.data.items };
	}

	render() {
		return (
      <ul className="list">
        {this.state.items.map((elem, index) =>
          <Item key={index} src={elem.source} name={elem.title} desc={elem.desc} />)
        }
      </ul>
		);
	}
}


export default List;

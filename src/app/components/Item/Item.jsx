import React from 'react';
import "./Item.scss";





class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="item">
      <div className="item__left">
        <div className="item__image">
          <img src={this.props.src} alt="Картинка"/>
        </div>
      </div>
      <div className="item__right">
        <h2 className="item__title">{this.props.name}</h2>
        <p className="item__data">First brewed: {this.props.time}</p>
        <p className="item__desc">{this.props.desc}</p>
        <div className="item__volume">Liters: {this.props.volume} vol.</div>
      </div>
      {/*{console.log(this.props)}*/}
    </li>
  }
}

Item.propTypes = {
  // src: React.PropTypes.string.isRequired,
  // name: React.PropTypes.string.isRequired,
  // time: React.PropTypes.number.isRequired,
  // desc: React.PropTypes.string.isRequired,
  // volume: React.PropTypes.number.isRequired
};

export default Item;

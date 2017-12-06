import React from 'react';
import "./Item.scss";


function Item(props) {
  // console.log(props)
  return (
     <li className="item">
      <div className="item__left">
        <div className="item__image">
          <img src={props.src} alt="Картинка"/>
        </div>
      </div>
      <div className="item__right">
        <h2 className="item__title">{props.name}</h2>
        <p className="item__data">First brewed: {props.time}</p>
        <p className="item__desc">{props.desc}</p>
        <div className="item__volume">Liters: {props.volume} vol.</div>
      </div>
    </li>
  )
}

Item.propTypes = {
  // src: React.PropTypes.string.isRequired
  // name: React.PropTypes.string.isRequired,
  // time: React.PropTypes.number.isRequired,
  // desc: React.PropTypes.string.isRequired
  // volume: React.PropTypes.number.isRequired
};


export default Item;

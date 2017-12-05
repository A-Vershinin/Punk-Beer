import React from "react";
import List from "./components/List/List";


import items from "./api/api.js";

// console.log(items);

const propsValues = {
  items: [
    {title: "Пиво1", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво2", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво3", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво4", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво5", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво6", source: "image.jpg", desc: "Какое-то описание"},
    {title: "Пиво7", source: "image.jpg", desc: "Какое-то описание"}
  ],
  // items: {items}
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {propsValues};
  }

  render () {
    return (
      <div>
        <List data={propsValues}/>
      </div>
    );
  }
}

export default App;

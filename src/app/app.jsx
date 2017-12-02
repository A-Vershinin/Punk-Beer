import React from "react";
import ComponentA from "./components/ComponentA/ComponentA";
import ComponentB from "./components/ComponentB/ComponentB";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        Hello world!
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default App;

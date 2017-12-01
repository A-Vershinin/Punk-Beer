import React from "react";
import ComponentA from "./components/ComponentA/ComponentA";

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
      </div>
    );
  }
}

export default App;

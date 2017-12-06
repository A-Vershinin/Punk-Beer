import React from "react";
import List from "./components/List/List";
import BeerAPI from "./api/beer";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount () {
    BeerAPI.getAllItems()
      .then(response => this.setState({items: response}))
      .catch(error => this.handleError(error));
  }

  handleError(error) {
    console.log(error);
  }

  render () {
    const beerData = this.state.items;
    const load = <div>Loading</div>;
    return (
      <div>
        <List data={this.state.items}/>
      </div>
    );
  }
}



export default App;

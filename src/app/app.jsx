import React from "react";
import PropTypes from 'prop-types';
import List from "./components/List/List";
import Header from "./components/Header/Header";
import BeerAPI from "./api/beer";
import SearchBar from "./components/SearchBar/SearchBar";


const someArr = [
    {id: 1, image_url: "https://images.punkapi.com/v2/191.png", name: "Beer Name", first_brewed: "04/2007", description: "New Zealand hops", boil_volume: {"value": 250}},
    {id: 2, image_ur2: "https://images.punkapi.com/v2/192.png", name: "Punk IPA 2007 - 2010", first_brewed: "23/2011", description: "Our flagship beer that", boil_volume: {"value": 350}},
    {id: 3, image_ur3: "https://images.punkapi.com/v2/194.png", name: "Beer Name3", first_brewed: "23/2012", description: "This is James and Martin's", boil_volume: {"value": 450}},
    {id: 4, image_ur4: "https://images.punkapi.com/v2/195.png", name: "Beer Name4", first_brewed: "21/2013", description: "riot of grapefruit", boil_volume: {"value": 50}}
];


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {items: []};
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    BeerAPI.getAllItems()
      .then(response => this.setState({items: response}))
      .catch(error => this.handleError(error));
  }

  handleAdd(title) {
    BeerAPI.getAllByName(title)
      .then(response => {
        console.log(response);
        this.setState({items: response})
      })
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
          <Header title={this.props.title}/>
          <section className="section">
            <div className="container">
              <SearchBar onAdd={this.handleAdd}/>
              <List data={this.state.items}/>
            </div>
          </section>
      </div>
    );
  }
}



App.defaultProps = {
  title: "Beans Love Beers",
};

export default App;

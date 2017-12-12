import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import './Home.scss';

import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';
import BeerAPI from '../../api/beer';

// const someArr = [
//   {
//     id: 1, image_url: 'https://images.punkapi.com/v2/191.png', name: 'Beer Name', first_brewed: '04/2007', description: 'New Zealand hops', boil_volume: { value: 250 },
//   },
//   {
//     id: 2, image_ur2: 'https://images.punkapi.com/v2/192.png', name: 'Punk IPA 2007 - 2010', first_brewed: '23/2011', description: 'Our flagship beer that', boil_volume: { value: 350 },
//   },
//   {
//     id: 3, image_ur3: 'https://images.punkapi.com/v2/194.png', name: 'Beer Name3', first_brewed: '23/2012', description: 'This is James and Martin\'s', boil_volume: { value: 450 },
//   },
//   {
//     id: 4, image_ur4: 'https://images.punkapi.com/v2/195.png', name: 'Beer Name4', first_brewed: '21/2013', description: 'riot of grapefruit', boil_volume: { value: 50 },
//   },
// ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], itemsPerPage: 6, numberPage: 1 };
    // numberItemsShow = 6; //кол-во элементов для показана на странице
    // numberPage = 1; //номер страницы по умолчанию
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageNumberShow = this.handlePageNumberShow.bind(this);
  }

  componentDidMount() {
    BeerAPI.getAllItems()
      .then(response => this.setState({ items: response }))
      .catch(error => this.handleError(error));
  }
  getItemsByPage(arr, numberPage) {
    // метод для пагинации
    return arr.slice((numberPage - 1) * this.state.itemsPerPage, numberPage * this.state.itemsPerPage);
  }

  handlePageNumberShow(pageNumber) {
    this.setState({ numberPage: pageNumber });
  }
  handleAdd(title) {
    BeerAPI.getAllByName(title)
      .then(response => this.setState({ items: response }))
      .catch(error => this.handleError(error));
  }
  handleError(error) {
    console.log(error);
  }

  render () {
    // const beerData = this.state.items;
    // const load = <div>Loading</div>;

    // Пагинация
    const itemsOnPage = this.getItemsByPage(this.state.items, this.state.numberPage);

    return (
        <main>
          <section className="section">
            <div className="container">
              <SearchBar onAdd={this.handleAdd}/>
              <Switch>
                <Route path="/list" component={List}/>
              </Switch>
              <Pagination
                onLinkClick={this.handlePageNumberShow}
                totalItems={this.state.items.length}
                numberItemsShow={this.state.itemsPerPage}
              />
            </div>
          </section>
        </main>
    )
  }
}

export default Home;

{/*<Route exact path="/list/:id" component={List}/>*/}
{/*<List data={itemsOnPage} />*/}

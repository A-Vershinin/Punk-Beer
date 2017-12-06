import React from "react";
import List from "./components/List/List";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {items: []};
  }

  componentWillMount() {
  // componentDidMount() {
    const URL = "https://api.punkapi.com/v2/beers?page=1&per_page=9";
    // const URL = "https://api.punkapi.com/v2/beers";
    // const URL = "https://api.punkapi.com/v2/beers/random";
    // this.responseData(URL)
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ items: json });
      })
      .catch(error => this.handleError);

  }

  handleError(error) {
    console.log(error);
  }

  responseData(url) {
    let promise = new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType= "json";
      xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
          reject();
        }
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      });
      xhr.addEventListener("error", (error) => {
        console.error(error);
        reject();
      });
      xhr.addEventListener("timeout", () => {
        console.log("Запрос не успел выполнится за: " + xhr.timeout + "мс");
      });
      xhr.timeout = 2000;
      xhr.send();
    });
    return promise;
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

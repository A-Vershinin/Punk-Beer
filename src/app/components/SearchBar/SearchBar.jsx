import React from 'react';
import { Button } from 'reactbulma'
import { Input } from 'reactbulma'
import "./SearchBar.scss";

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="level search-bar">
        <div className="level-item has-text-centered search-bar__inner">
          <div className="field has-addons search-bar__group">
            <div className="control search__block search__block--input">
              <Input type="text" placeholder="Find a Beer"/>
            </div>
            <div className="control search__block">
              <Button info>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchBar;


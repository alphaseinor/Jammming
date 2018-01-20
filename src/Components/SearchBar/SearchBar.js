import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyDown={this.handleEnter} />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;

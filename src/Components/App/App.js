import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.SearchResults = {
      'name': 'name',
      'artist': 'artist',
      'album': 'album'
    };




  this.playlistName = { "playlistName" : "brian's playlist" } ;

  this.playlistTracks = [{
     'id' : '01234567890',
     'name' : 'The way we were',
     'artist' : 'Barbarella Streisssssand',
     'album' : 'The way we were'
   }];
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar />
        <div className="App">
          <div className="App-playlist">
          <SearchResults searchResults= {this.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

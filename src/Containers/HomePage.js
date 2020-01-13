import React, { Component } from 'react';
import MovieContainer from '../Containers/MovieContainer';
import MovieDisplayFilter from '../Components/MovieDisplayFilter';
import SearchBar from '../Components/SearchBar';

class HomePage extends Component {
  state = {
    filterUrl: '/movie/popular'
  }

  changeUrlHandler = (filter) => {
    this.setState({filterUrl: filter});
  }


  render () {
    return (
      <div>
        <SearchBar />
        <MovieDisplayFilter click={this.changeUrlHandler} />
        <MovieContainer url={this.state.filterUrl} />
      </div>
    );
  } 
}

export default HomePage;
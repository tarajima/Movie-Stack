import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieContainer from '../Containers/MovieContainer';

class SearchPage extends Component {
  state = {
    searchKeyword: ''
  }
  componentDidUpdate (prevProps) {
    if(prevProps.match.params.keyword !== this.props.match.params.keyword) {
      this.setState({searchKeyword: this.props.match.params.keyword})
    }
  }

  render () {
    return (
      <div>
        <SearchBar />
        <p>You searched: {this.props.match.params.keyword}</p>
        <MovieContainer url='/search/movie' searchKeyword={this.props.match.params.keyword} />
      </div>
    );
  }


  
}

export default SearchPage;
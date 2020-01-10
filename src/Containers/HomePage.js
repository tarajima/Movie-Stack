import React, { Component } from 'react';
import MovieContainer from '../Containers/MovieContainer';

class HomePage extends Component {
  state = {
    filter: 'popular'
  }

  url = '/movie/';

  changeUrlHandler = (filter) => this.setState({filter: filter});


  render () {
    if (this.state.filter === 'popular') { this.url += 'popular'; }
    if (this.state.filter === 'topRated') { this.url += 'top_rated'; }
    if (this.state.filter === 'upcoming') { this.url += 'upcoming'; }
    if (this.state.filter === 'nowPlaying') { this.url += 'now_playing'; }

    return (
      <div>
        <MovieContainer url={this.url} />
      </div>
    );
  } 
}

export default HomePage;
import React, { Component } from 'react';
import axios, { imageBase } from '../axiosConfig';
import configKey from '../key';
import SearchBar from '../Components/SearchBar';

class MovieDetailsPage extends Component {
  state = {
    movie: ''
  }

  componentDidMount() {
      let url = '/movie/' + this.props.match.params.id;
      axios.get(url, configKey)
      .then(response =>  {
        this.setState({movie: response.data});
      })
      .catch(error => console.log(error));
    }

  render () {
    let moviePoster = <img 
                        src={imageBase + 'w300' + this.state.movie.poster_path} 
                        alt={this.state.movie.title} />
    if(this.state.movie.poster_path === null || this.state.movie.poster_path === undefined) {
      moviePoster = <h2>No Poster Available</h2>
    }

    return (
      <div>
        <SearchBar />
        
        {moviePoster}
        <h1>{this.state.movie.title}</h1>
        <h2>{this.state.movie.vote_average}/10</h2>
        <h2>{this.state.movie.release_date}</h2>
        <p>{this.state.movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
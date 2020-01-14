import React, { Component } from 'react';
import axios from '../axiosConfig';
import keyConfigObject, { keyObject } from '../key';
import IndividualMovie from '../Components/IndividualMovie';
import '../Styles/movieContainers.scss';

class MovieContainer extends Component {
  state = {
    movies: ''
  }
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.setMoviesHttpRequest();
    }
  }

  componentDidMount () {
    this.setMoviesHttpRequest();
  }

  setMoviesHttpRequest() {
    let config = keyConfigObject;
    if(this.props.searchKeyword) { // If this component is in the search page, set proper config
      config = {params: {
        ...keyObject,
        query: this.props.searchKeyword
      }}
    }
    if(this.props.discover === true) { // If this component is in the Discover page, set proper config
      config = this.props.discoverConfig;
    }
    axios.get(this.props.url, config)
    .then(response =>  {
      this.setState({movies: response.data.results.slice(0,12)});
    })
    .catch(error => console.log(error));
  }

    render () {
      let movies = <h1>No Movies Found</h1>;
      if(this.state.movies.length > 0) {
        movies = (
          <div className="MovieContainer">
            {this.state.movies.map(movie => {
              return <IndividualMovie
                    src={movie.poster_path}
                    title={movie.title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    description={movie.overview}
                    id={movie.id}
                    key={movie.id}
                     />
                    })}
          </div>
        );}
      
      return (
        <div>
          {movies}
        </div>);
    }
}

export default MovieContainer;
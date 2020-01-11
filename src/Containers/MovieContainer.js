import React, { Component } from 'react';
import axios from '../axiosConfig';
import keyConfigObject, { keyObject } from '../key';
import IndividualMovie from '../Components/IndividualMovie';

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
    if(this.props.searchKeyword) {
      config = {params: {
        ...keyObject,
        query: this.props.searchKeyword
      }}
    }
    axios.get(this.props.url, config)
    .then(response =>  {
      this.setState({movies: response.data.results.slice(0,12)});
    })
    .catch(error => console.log(error));
  }

    render () {
      let movies = null;
      if(this.state.movies !== '') {
        movies = (
          <div>
            {this.state.movies.map(movie => {
              return <IndividualMovie
                    src={movie.poster_path}
                    title={movie.title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    description={movie.overview}
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
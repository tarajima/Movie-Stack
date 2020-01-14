import React, { Component } from 'react';
import axios, { imageBase } from '../axiosConfig';
import configKey from '../key';
import SearchBar from '../Components/SearchBar';
import FavouriteButton from '../Components/FavouriteButton';
import UserRating from '../Components/UserRating';
import '../Styles/MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    movie: '',
    favourited: false,
    userRating: -1
  }

  favouriteHandler = () => {
    // Get favouritedMovies from local Storage
    var currentFavouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies'));
    // If it's null, set favouritedMovies and add this movie to favouritedMovies
    if (currentFavouritedMovies === null) {
      currentFavouritedMovies = [];
      currentFavouritedMovies.push(this.state.movie);
      this.setState({favourited: true});
    } else {
    // If favouritedMovies is already set, check if this movie exists in the list
      let movieIndex = currentFavouritedMovies.findIndex(movie => {
        return movie.id === this.state.movie.id;
      });
      // If it exists, unfavourite it and remove it from the list
      if (movieIndex !== -1) {
        currentFavouritedMovies.splice(movieIndex, 1);
        this.setState({favourited: false});
      }
      // If it doesn't exist, add it to the list
      if (movieIndex === -1) {
        currentFavouritedMovies.push(this.state.movie);
        this.setState({favourited: true});
      }
    }
    localStorage.setItem('favouritedMovies', JSON.stringify(currentFavouritedMovies));
  }

  ratingHandler = (event) => {
    // Get user rating and append to movie data  
    var selectedRating = event.target.value;
    const movieData = {...this.state.movie, userRating: selectedRating};
    // Get ratedMovies from local Storage
    var currentRatedMovies = JSON.parse(localStorage.getItem('ratedMovies'));
    // If it's null, set ratedMovies and add this movie to ratedMovies
    if (currentRatedMovies === null) {
      currentRatedMovies = [];
      currentRatedMovies.push(movieData);
    } else {
    // If ratedMovies is already set, add this movie and its user rating to the list
        currentRatedMovies.push(movieData);
    }
    this.setState({userRating: selectedRating});
    localStorage.setItem('ratedMovies', JSON.stringify(currentRatedMovies));
  }


  componentDidMount() {
    // Get Movie HTTP Request
    let url = '/movie/' + this.props.match.params.id;
    axios.get(url, configKey)
    .then(response =>  {
      this.setState({movie: response.data});
    })
    .catch(error => console.log(error));

    // Get localStorage data
    // Get favouritedMovies from localStorage
    let favouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies'));
    // If it exists, find this movie
    if (favouritedMovies !== null) {
      const movieIsFavourited = favouritedMovies.find(movie => {
        return movie.id === parseInt(this.props.match.params.id);
      });
      if (movieIsFavourited) {
      // If this movie exists in favouritedMovies, set state favourited=true
        this.setState({favourited: true});
      }
    }

    // Get ratedMovies from localStorage
    let ratedMoviesInLs = JSON.parse(localStorage.getItem('ratedMovies'));
    // If it exists, find this movie
    if (ratedMoviesInLs !== null) {
      const ratedMovie = ratedMoviesInLs.find(movie => {
        return movie.id === parseInt(this.props.match.params.id);
      });
      if (ratedMovie) {
      // If this movie exists in ratedMovies, set state userRating
        this.setState({userRating: parseInt(ratedMovie.userRating)});
      }
    }
    }

  render () {
    let moviePoster = <img 
                        src={imageBase + 'w300' + this.state.movie.poster_path} 
                        alt={this.state.movie.title}
                        className="movie-poster" />
    if(this.state.movie.poster_path === null || this.state.movie.poster_path === undefined) {
      moviePoster = <h2>No Poster Available</h2>
    }

    return (
      <div className="MovieDetailsPage">
        <SearchBar />
        <div className="movie-details-wrapper">
          <FavouriteButton favouriteHandler={this.favouriteHandler} favourited={this.state.favourited} />
          <UserRating ratingHandler={this.ratingHandler} userRating={this.state.userRating} />
          {moviePoster}
          <h1 className="movie-title">{this.state.movie.title}</h1>
          <h2>Average Rating: {this.state.movie.vote_average}/10</h2>
          <h2>Release Date: {this.state.movie.release_date}</h2>
          <p className="movie-description">{this.state.movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
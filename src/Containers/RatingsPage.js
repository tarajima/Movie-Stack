import React, { Component } from 'react';
import IndividualMovie from '../Components/IndividualMovie';
import SearchBar from '../Components/SearchBar';
import '../Styles/movieContainers.scss';


class RatingsPage extends Component {
  constructor(props) {
    super(props);
    let ratedMovies = JSON.parse(localStorage.getItem('ratedMovies'));
    if (ratedMovies !== null && ratedMovies.length > 0) {
      this.state = {movies: ratedMovies};
    } else {
      this.state = {movies: []}
    }
  }

  render() {
    return (
      <div>
        <h1 className="page-title">My Ratings</h1>
        <div className="RatingsPage">
          {this.state.movies.length > 0 ?
            this.state.movies.map(movie => {
              return <IndividualMovie src={movie.poster_path}
                                      title={movie.original_title}
                                      release={movie.release_date}
                                      rating={movie.vote_average}
                                      description={movie.overview}
                                      userRating={movie.userRating}
                                      id={movie.id}
                                      key={movie.id}/>
            })
            : (
            <div>
              <SearchBar />
              <p>You have no rated movies.<br />Search for a movie to give it a rating.</p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
  
}

export default RatingsPage;
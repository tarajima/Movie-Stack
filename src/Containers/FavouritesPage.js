import React, { Component } from 'react';
import IndividualMovie from '../Components/IndividualMovie';
import SearchBar from '../Components/SearchBar';

class FavouritesPage extends Component {
  constructor(props) {
    super(props);
    let favouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies'));
    if (favouritedMovies !== null && favouritedMovies.length > 0) {
      this.state = {movies: favouritedMovies};
    } else {
      this.state = {movies: []}
    }

  }

  render() {
    return (
      <div>
        {this.state.movies.length > 0 ?
          this.state.movies.map(movie => {
            return <IndividualMovie src={movie.poster_path}
                                    title={movie.original_title}
                                    release={movie.release_date}
                                    rating={movie.vote_average}
                                    description={movie.overview}
                                    id={movie.id}
                                    key={movie.id}/>
          })
          : (
          <div>
            <SearchBar />
            <h2>You have no favourited movies. Search for a movie to add to your favourites.</h2>
          </div>
          )
        }
      </div>
    );
  }
  
}

export default FavouritesPage;
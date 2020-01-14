import React, { Component } from 'react';
import ChooseYearGenre from '../Components/ChooseYearGenre';
import axios from '../axiosConfig';
import keyConfig, { keyObject } from '../key';
import MovieContainer from './MovieContainer';
import SortResults from '../Components/SortResults';

class DiscoverPage extends Component {
  state = {
    sortBy: 'popularity.desc',
    selectedYear: 2020,
    selectedGenreIds: [],
    genreList: []
  }

  changeYearHandler = (event) => {
    this.setState({selectedYear: parseInt(event.target.value)});
  }

  changeGenreHandler = (event) => {
    let options = event.target.options;
    let selectedOptions = [];
    for(let i = 0; i < options.length; i++) {
      if (options[i].selected === true) {
        selectedOptions.push(options[i].value);
      }
    }
    this.setState({selectedGenreIds: selectedOptions});
  }

  changeSortHandler = (event) => {
    this.setState({sortBy: event.target.value});
  }

  createAxiosConfig = () => {
    let config = {
      params: {
        ...keyObject,
        sort_by: this.state.sortBy,
        primary_release_year: this.state.selectedYear,
        with_genres: this.state.selectedGenreIds.toString()
      }
    }
    return config;
  }

  componentDidMount() {
    axios.get('/genre/movie/list', keyConfig)
          .then((response) => this.setState({genreList: response.data.genres}))
          .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Discover</h1>
        <ChooseYearGenre genres={this.state.genreList}
                          yearHandler={this.changeYearHandler}
                          genreHandler={this.changeGenreHandler} />
        <SortResults sortHandler={this.changeSortHandler} />
        <MovieContainer discoverConfig={this.createAxiosConfig()}
                        discover={true}
                        url="/discover/movie" />
      </div>
    );
  }
}

export default DiscoverPage
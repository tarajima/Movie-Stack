import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class SearchBar extends Component {
  state = {
    searchValue: '',
    entered: 'false'
  }

  onChangeHandler = (e) => {
    if (e.target.value.trim()) {
      this.setState({searchValue: e.target.value.trim()});
    } else {
      this.setState({searchValue: ''});
    }
  }

  enterInputHandler = (e) => {
    if (e.key === 'Enter') {
      if(this.state.searchValue) {
        this.setState({entered: true});
        setTimeout(() => this.setState({entered: false}), 1);
      }
    }
  }

  render () {
    if (this.state.entered === true) {
      return <Redirect to={'/search/' + this.state.searchValue} />;
    }

    return (
      <div className="col-auto">
        <input type="search"
              placeholder="Search for a movie..."
              onChange={this.onChangeHandler}
              onKeyDown={this.enterInputHandler}
               className="form-control form-control-lg" />
      </div>
    );
  }
} 

export default SearchBar;
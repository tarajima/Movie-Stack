import React, { Component } from 'react';
import { imageBase } from '../axiosConfig';

class IndividualMovie extends Component {
  
    render () {
      return (
      <div>
        <img src={imageBase + '/w500' + this.props.src} alt={this.props.title}/>
      </div>);
    }
}

export default IndividualMovie;
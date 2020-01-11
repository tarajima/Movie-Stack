import React from 'react';
import { imageBase } from '../axiosConfig';
import { Link } from 'react-router-dom';

const IndividualMovie = (props) => {
  let poster = <img src={imageBase + 'w300' + props.src} alt={props.title}/>;
  if (props.src === null || props.src === undefined) { 
    poster = <h2>No Poster Available</h2>;
   }

  return (
    <div>
      {poster}
      <h1>{props.title}</h1>
      <p>{props.release}</p>
      <p>{props.rating}/10</p>
      <p>{props.description}</p>
      <p>
        <Link to={'/movie/' + props.id}>More Info</Link>
      </p>
    </div>
  );
}


export default IndividualMovie;
import React from 'react';
import { imageBase } from '../axiosConfig';
import { Link } from 'react-router-dom';
import UserRating from './UserRating';

const IndividualMovie = (props) => {
  let poster = <img src={imageBase + 'w300' + props.src} alt={props.title}/>;
  if (props.src === null || props.src === undefined) { 
    poster = <h2>No Poster Available</h2>;
   }

  return (
    <div>
      {poster}
      {props.userRating ? <UserRating userRating={props.userRating} />
                        : null
      }
      <h1>{props.title}</h1>
      <p>{props.release}</p>
      <p>Average Rating: {Math.round(props.rating / 10 * 100)}%</p>
      <p>{props.description}</p>
      <p>
        <Link to={'/movie/' + props.id}>More Info</Link>
      </p>
    </div>
  );
}


export default IndividualMovie;
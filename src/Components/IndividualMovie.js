import React from 'react';
import { imageBase } from '../axiosConfig';
import { Link } from 'react-router-dom';
import UserRating from './UserRating';
import '../Styles/IndividualMovie.scss';

const IndividualMovie = (props) => {
  let poster = <img className="movie-poster" src={imageBase + 'w300' + props.src} alt={props.title}/>;
  if (props.src === null || props.src === undefined) { 
    poster = <h2 className="no-poster">No Poster Available</h2>;
   }

  let description = props.description.slice(0,100);
  if (props.description.length > 100) {
    description += '...';
  }

  return (
    <div className="IndividualMovie">
      <div className="movie-graphics">
        <Link to={'/movie/' + props.id}>{poster}</Link>
        {props.userRating ? <UserRating userRating={props.userRating} />
                          : null
        }
      </div>
      <div className="movie-text">
        <h1 className="title">{props.title}</h1>
        <p className="release">{props.release}</p>
        <p className="rating">Average Rating: {Math.round(props.rating / 10 * 100)}%</p>
        <p className="description">{description}</p>
        <p>
          <Link to={'/movie/' + props.id}>More Info</Link>
        </p>
      </div>
    </div>
  );
}


export default IndividualMovie;
import React from 'react';
import { imageBase } from '../axiosConfig';



const IndividualMovie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.release}</p>
      <p>{props.rating}/10</p>
      <p>{props.description}</p>
      <img src={imageBase + '/w300' + props.src} alt={props.title}/>
    </div>
  );
}


export default IndividualMovie;
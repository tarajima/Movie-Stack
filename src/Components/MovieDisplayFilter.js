import React from 'react';

const MovieDisplayFilter = (props) => {
  return (
    <div>
      <button onClick={() => props.click('/movie/popular')}>Popular</button>
      <button onClick={() => props.click('/movie/top_rated')}>Top Rated</button>
      <button onClick={() => props.click('/movie/upcoming')}>Upcoming</button>
      <button onClick={() => props.click('/movie/now_playing')}>Now Playing</button>
    </div>
  );
}

export default MovieDisplayFilter;
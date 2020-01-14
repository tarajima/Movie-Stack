import React from 'react';
import '../Styles/MovieDisplayFilter.scss';

const MovieDisplayFilter = (props) => {
  return (
    <div className="MovieDisplayFilter container">
          <div className="row">
            <button onClick={() => props.click('/movie/popular')}
                    className="btn btn-secondary col">Popular</button>
            <button onClick={() => props.click('/movie/top_rated')}
                    className="btn btn-secondary col">Top Rated</button>
            <div className="w-100"></div>
            <button onClick={() => props.click('/movie/upcoming')}
                    className="btn btn-secondary col">Upcoming</button>
            <button onClick={() => props.click('/movie/now_playing')}
                    className="btn btn-secondary col">Now Playing</button>
          </div>
    </div>
  );
}

export default MovieDisplayFilter;
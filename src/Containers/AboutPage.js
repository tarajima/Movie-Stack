import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This application is a simple movie gallery created for educational purposes. It was created using the React framework and The Movie Database API. Users can search, discover, rate, and favourite movies. It uses local storage to store user ratings and favourited movies.</p>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg" alt=""/>
    </div>
  );
}

export default AboutPage;
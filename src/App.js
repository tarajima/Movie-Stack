import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import HomePage from './Containers/HomePage';
import SearchPage from './Containers/SearchPage';
import MovieDetailsPage from './Containers/MovieDetailsPage';
import AboutPage from './Containers/AboutPage';
import DiscoverPage from './Containers/DiscoverPage';
import FavouritesPage from './Containers/FavouritesPage';
import RatingsPage from './Containers/RatingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/search/:keyword" exact component={SearchPage} />
          <Route path="/movie/:id" component={MovieDetailsPage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/favourites" component={FavouritesPage} />
          <Route path="/ratings" component={RatingsPage} />
          <Route patch="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import HomePage from './Containers/HomePage';
import SearchPage from './Containers/SearchPage';
import MovieDetailsPage from './Containers/MovieDetailsPage';
import AboutPage from './Containers/AboutPage';
import DiscoverPage from './Containers/DiscoverPage';

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
          <Route patch="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

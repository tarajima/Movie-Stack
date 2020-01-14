import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.scss';

const Nav = () => {
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
      <Link to="/"><h1 className="navbar-brand">MovieStack</h1></Link>
      {/* <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarToggler" ariaControls="navbarToggler" ariaExpanded="false" ariaLabel="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <ul className="navbar-nav" id="navbarToggler">
        <Link to="/"><li className="nav-item nav-link active">Home</li></Link>
        <Link to="/discover"><li className="nav-item nav-link">Discover</li></Link>
        <Link to="/favourites"><li className="nav-item nav-link">My Favourites</li></Link>
        <Link to="/ratings"><li className="nav-item nav-link">My Ratings</li></Link>
        <Link to="/about"><li className="nav-item nav-link">About</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
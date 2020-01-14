import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.scss';

const Nav = () => {
  const togglerClickHandler = () => {
    const navBar = document.querySelector(".navbar-nav");
    if(navBar.style.display === "none") {
      navBar.style.display = "block";
    } else {
      navBar.style.display = "none";
    }
  }
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
      <Link to="/"><h1 className="navbar-brand">MovieStack</h1></Link>
      <button className="navbar-toggler" type="button" onClick={togglerClickHandler}>
       <span className="navbar-toggler-icon"></span>
      </button>

      <ul className="navbar-nav" >
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
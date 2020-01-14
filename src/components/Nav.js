import React, {useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import nav from '../js/nav';

const Nav = () => {

  useEffect(() => {
    nav();
  }, [])

  return (
    <div className="nav">
      <div className="nav__content">
        <nav className="nav__items">
          <NavLink to="/" className="nav__item">Home</NavLink>
          <NavLink to="/about" className="nav__item">About</NavLink>
          <NavLink to="/listen" className="nav__item">Listen</NavLink>
          <NavLink to="/watch" className="nav__item">Watch</NavLink>
          <NavLink to="/calendar" className="nav__item">Calendar</NavLink>
          <NavLink to="/contact" className="nav__item">Contact</NavLink>
        </nav>
      </div>
      <div className="nav-hero">
        <div className="nav-hero-img" data-displacement="img/displacement/noise.jpg">
          <img src="img/1.jpg" alt="project1"/>
          <img src="img/2.jpg" alt="project2"/>
        </div>
        <Link
          className="button-arrow-black nav-hero__cta"
          to='/contact'
        >
          Contact Me<img src="../img/arrow-white.svg" alt="arrow"/>
        </Link>
      </div>
    </div>
  )
}

export default Nav;
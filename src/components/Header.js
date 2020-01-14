import React, { useEffect } from 'react';
import { ReactComponent as Pull } from '../svg/pull.svg';
import { withRouter } from 'react-router-dom';
import { Link  } from 'react-router-dom';
import Nav from './Nav';
import header from '../js/header'

const Header = props => {
  useEffect(() => {
   header()
  }, []);

  return (
    <header className="header" role="banner">
      <Link to="/" className="header__logo"><img src="./img/logo.png" alt=""/></Link>
      <h2 className="header__brand">Alfredo Ovalles<span>Pianist</span></h2>
      <div className="header__pull">
        <div className="pull-wrapper"><Pull/></div>
      </div>
      <Nav/>
    </header>
  )
}

export default withRouter(Header);


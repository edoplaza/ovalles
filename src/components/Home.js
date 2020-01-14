import React, { useContext, useEffect } from 'react';
import scroll from '../js/scroll';
import fadein from '../js/fadein';
import { MainContext } from '../contexts/MainContext';
import home from '../js/home';

const Home = () => {

  const { getOptions, options } = useContext(MainContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    home();
    getOptions();
    scroll();
    fadein();
  }, [])
  return (
    <div
      className="home fade-in"
      data-site-body="home"
      //style={{backgroundImage: 'url(img/home1.jpg)'}}
    >
      <div className="home__image" data-displacement="img/displacement/noise3.jpg">
        <img src="img/home1.jpg" alt="home1"/>
        <img src="img/home1.jpg" alt="home2"/>
      </div>


      <div className="home__review">
        <p>{options.home_quote}</p>
        <h3>{options.home_quote_author}</h3>
      </div>

    </div>
  )
}

export default Home;

import React, { useContext, useEffect } from 'react';
import { MainContext } from '../contexts/MainContext';
import PageHeader from './PageHeader';

const About = () => {
 const { getAbout, about } = useContext(MainContext);

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="about">
      <div className="about__inner wrapper">
        <PageHeader title='About' />
        <div className="about__content">
          <div className="about__text">
            {about.map(item => (
              <div
                className='entry'
                key={item.id}
                style={{color: 'white'}}
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}>
              </div>
            ))}
          </div>
        </div>
        <img className="about__back" src="img/about.jpg" alt="Alfredo Ovalles"/>
      </div>
    </div>
  )
}

export default About
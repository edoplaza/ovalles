import React, { useContext, useEffect } from 'react';
import { MainContext } from '../contexts/MainContext';
import PageHeader from './PageHeader';
import contact from '../js/contact';

const Contact = () => {

  const { getOptions, options } = useContext(MainContext);
   useEffect(() => {
    getOptions();
    contact();
  }, [])

  return (
    <div className="contact__inner wrapper">
      <PageHeader title='Contact' />
      <div className="contact__top">
        <div className="contact__top-tag">
          <h2>Let's connect.</h2>
          <p>Drop me a line with any thoughts or questions and I'll get back to you as soon as possible.</p>
          <a href="mailto:{options.email}">{options.email}</a>
          </div>
      </div>
      <div className="contact__main">
        <div className="contact__mask"></div>
        <div className="contact__output"></div>
        <div className="contact__form">
          <form className="form" noValidate>
            <input
              className='input-name'
              type="text"
              placeholder='Name'
            />
            <input
              className="input-email"
              placeholder='Email'
            />
            <input
              className="input-message"
              placeholder='Message'
            />
            <button
              className="contact__submit submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="contact__info">
          <p className="contact__info-item"><i className="fab fa-instagram"></i> <a href={options.instagram} rel="noopener noreferrer" target="_blank">@alfovalles</a></p>
          <p className="contact__info-item"><i className="fab fa-youtube-square"></i> <a href={options.youtube} rel="noopener noreferrer" target="_blank">youtube/amopae</a></p>
          <p className="contact__info-item"><i className="fab fa-bandcamp"></i> <a href={options.bandcamp} rel="noopener noreferrer" target="_blank">bandcamp/alfredoovalles</a></p>
        </div>
      </div>
    </div>

  )
}

export default Contact
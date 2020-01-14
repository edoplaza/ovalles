import React, { createContext, useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export const MainContext = createContext();

const MainContextProvider = props => {

  const [options, setOptions] = useState({});
  const [about, setAbout] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [calendar, setCalendar] = useState([]);
  let url;

  useEffect(() => {

  }, [videos, calendar, about, options]);

  window.location.href.indexOf('http://localhost') > -1  ? url = 'http://ovalleswp:8888/' : url = 'https://alfredoovalles.com/wpsite';

  const getOptions = async () => {
    const result = await axios.get(`${url}/wp-json/acf/v3/options/acf-general-options`)
    setOptions({...result.data.acf});
  }

  const getAbout = async () => {
    const result = await axios(`${url}/wp-json/wp/v2/pages/?slug=about`);
    setAbout(result.data);
  }

  const getVideos = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/acf-videos`);
    let vids = result.data.acf.videos_list;
    setVideos([...vids]);
  }

  const getAudios = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/acf-audio`);
    let auds = result.data.acf.audio_list;
    setAudios([...auds]);
  }

   const getCalendar = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/acf-calendar`);
    let cals = result.data.acf.calendar_list;
    setCalendar([...cals]);
  }

  return (
    <MainContext.Provider value={{ getOptions, getAbout, getVideos, getAudios, getCalendar, options, about, videos, audios, calendar }}>
      { props.children }
    </MainContext.Provider>
  )
}

export default withRouter(MainContextProvider);

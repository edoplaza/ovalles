import React, { useContext, useEffect} from 'react';
import { MainContext } from '../contexts/MainContext';
import PageHeader from './PageHeader';
import scroll from '../js/scroll'

const Listen = () => {

  const { getAudios, audios } = useContext(MainContext);
   useEffect(() => {
    getAudios();
    scroll();
  }, [])

  return (
    <div className="listen">
      <div className="listen__inner wrapper">
        <PageHeader title='Listen' />
        <div className="listen__content">
          <div className="listen__list">
            {audios.map(audio => {
              return (
                <div className="audio move-up" key={audio.audio_audio}>
                  <div className='audio__frame'>
                    <iframe src={audio.audio_audio}></iframe>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listen
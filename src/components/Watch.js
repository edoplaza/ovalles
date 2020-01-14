import React, { useContext, useEffect} from 'react';
import { MainContext } from '../contexts/MainContext';
import PageHeader from './PageHeader';
import scroll from '../js/scroll'

const Watch = () => {

  const { getVideos, videos } = useContext(MainContext);
   useEffect(() => {
    getVideos();
    scroll();
  }, [])

  return (
    <div className="watch">
      <div className="watch__inner wrapper">
        <PageHeader title='Watch' />
        <div className="watch__content">
          <div className="watch__list">
            {videos.map(video => {
              return (
                <div className="video move-up" key={video.title_video}>
                  <div
                    className='video__frame'
                    dangerouslySetInnerHTML={{ __html: video.url_video }}>
                  </div>
                  <h2 className="video__title">
                    {video.title_video}
                  </h2>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
import React, { useContext, useEffect} from 'react';
import { MainContext } from '../contexts/MainContext';
import PageHeader from './PageHeader';
import scroll from '../js/scroll';
import {ReactComponent as Down } from '../svg/angle-down-solid.svg';

const Calendar = () => {
  const { getCalendar, calendar } = useContext(MainContext);

  useEffect(() => {
    getCalendar();
    scroll();
  }, [])

  const expand = e => {

    if (e.target.classList.contains('up')) {
      e.target.parentNode.querySelector('.cal__long').classList.remove('expanded');
      e.target.classList.remove('up');
    } else {
      e.target.parentNode.querySelector('.cal__long').classList.add('expanded');
      e.target.classList.add('up');
    }
  }

  return (
    <div className="calendar">
      <div className="calendar__inner wrapper">
        <PageHeader title='Calendar' />
        <div className="calendar__content">
          <div className="calendar__list">
            {calendar.map(cal => {
              return (
                <div className="cal move-up" key={cal.event_title_calendar}>
                  <h2 className="cal__title">

                    {cal.event_title_calendar}
                  </h2>
                  <h3 className="cal__date">
                    <i className="fas fa-calendar-day"></i>
                    <div>
                      <span>{cal.start_date_calendar} </span>
                      {cal.end_date_calendar ? <span>- {cal.start_date_calendar}</span> : null }
                      @
                      <span> {cal.start_time_calendar}  { cal.end_time_calendar ? ` - ${cal.end_time_calendar}` : null }</span>
                    </div>
                  </h3>
                  <div className="cal__address">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                    {cal.address_calendar}.

                    <a href={`https://www.google.com/maps/search/?api=1&query=${cal.address_calendar}`} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-external-link-alt"></i></a>
                    </div>
                  </div>

                  <div className="cal__short">
                     <i className="fas fa-info-circle"></i>
                    <div
                      className="cal__short-info entry"
                      dangerouslySetInnerHTML={{ __html: cal.short_description_calendar }}
                    >
                    </div>
                  </div>

                  { cal.long_description_calendar ?
                    (
                      <>
                        <div
                          className="cal__long entry"
                          dangerouslySetInnerHTML={{ __html: cal.long_description_calendar }}
                        >
                        </div>
                        <span className="cal__more" onClick={e => expand(e)}>Find out more <Down /></span>
                      </>

                    ) : (
                      null
                    )
                  }
                </div>
              )
            })}
          </div>
        </div>
        <img className="calendar__back" src="img/calendar.jpg" alt="Alfredo Ovalles"/>
      </div>
    </div>
  )
}

export default Calendar
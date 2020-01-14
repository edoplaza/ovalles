import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Next } from '../svg/next.svg';
import { ReactComponent as Prev } from '../svg/prev.svg';

const ArrowsTop = props => {
  return (
    <div className="arrows-top">
      <div className="arrows-top__inner">
        <Link onClick={props.update} to={props.prev} className={`arrows-top__arrow arrows-top__arrow-left ${props.color}`}><Prev/></Link>
        <Link onClick={props.update} to={props.next} className={`arrows-top__arrow ${props.color}`}><Next/></Link>
      </div>
    </div>
  )
}

export default ArrowsTop
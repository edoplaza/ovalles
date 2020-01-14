import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Next } from '../svg/next.svg';
import { ReactComponent as Prev } from '../svg/prev.svg';

const Arrows = props => {
  return (
    <div className="arrows">
      <div className="arrows__inner">
        <Link onClick={props.update} to={props.prev} className="arrows__arrow arrows__arrow-left"><Prev/><span>Previous project</span></Link>
        <Link onClick={props.update} to={props.next} className="arrows__arrow"><span>Next project</span><Next/></Link>
      </div>
    </div>
  )
}

export default Arrows
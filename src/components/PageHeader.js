import React from 'react';

const PageHeader = props => {
  return (
    <div className="page-header">
     <h1 className="page-header__title">{props.title}</h1>
    </div>
  )
}

export default PageHeader
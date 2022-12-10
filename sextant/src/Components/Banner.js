import React from 'react'
import './Banner.css';

const Banner = (props) => {
  return (
    <div className='banner__wrapper'>
      <div className='banner__title'>{props.bannerText}</div>
    </div>
  )
}

export default Banner

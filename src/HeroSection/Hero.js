import React from 'react'
import Header from './Header';
import './hero.css';
import Trip from './TripItem/Trip';

const Hero = () => {
  return (
    <div className='container hero-section'>
      <Header/>
      <Trip/>
    </div>
  )
}

export default Hero;
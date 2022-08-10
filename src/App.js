import React from 'react';
import Home from './Home';
import CountryComponent from './components/CountryComponent';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
import Hero from './HeroSection/Hero';
import AboutTestomonial from './components/testimonial/AboutTestomonial';
import VideoContainer from './VideoModal/VideoContainer';
import TripAdvisor from './components/Advisor/TripAdvisor';
function App() {
  return (
  <>
   <div className="App">
      <Home/>
    </div>
    <Routes>
      <Route path='/country/:id' element={<CountryComponent/>} />
    </Routes>
    <Gallery/>
    <Hero/>
    <AboutTestomonial/>
  <VideoContainer/>
  <TripAdvisor/>
  </>
   
  )
}

export default App;

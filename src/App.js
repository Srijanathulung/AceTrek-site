import React from 'react';
import Home from './Home';
import './App.css';
import Gallery from './components/gallery/Gallery';
import Hero from './HeroSection/Hero';
import AboutTestomonial from './components/testimonial/AboutTestomonial';
import VideoContainer from './VideoModal/VideoContainer';
// import {Routes,Route} from 'react-router-dom';
function App() {
  return (
  <>
   <div className="App">
      <Home/>
    </div>
{/* <Routes>
  <Route path='/' element={}/>
</Routes> */}

    {/* <Routes>
      <Route path='/country/:id' element={<CountryComponent/>} />
    </Routes> */}
    <Gallery/>
    <Hero/>
    <AboutTestomonial/>
  <VideoContainer/>
  </>
   
  )
}

export default App;

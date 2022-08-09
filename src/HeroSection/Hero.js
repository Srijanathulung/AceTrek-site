import React from "react";
import Header from "./Header";
import "./hero.css";
import Trip from "./TripItem/Trip";
import Modal from "../components/modal/Modal";
import Trial from '../assets/trial.jpg';
import Freedom from '../assets/freedom.jpeg';
import JeepSafari from '../assets/jeepsafari.jpg';
import Snow from '../assets/snow.jpg';

const Hero = () => {
  return (
    <div className="container hero-section mt-5">
      <Header />
      <div className="trips-four-items d-flex">
        <div className="row">
        <Trip imgsrc={Trial} title='Everest base camp-9days'/>
        <Trip  imgsrc={Freedom} title='Annapurna Base Camp'/>
        </div>
       <div className="row">
       <Trip  imgsrc={JeepSafari} title='Jeep Safari-wild animals'/>
        <Trip imgsrc={Snow} title='Annapurna -base Camp-14days'/>
       </div>
        
      </div>
    </div>
  );
};

export default Hero;

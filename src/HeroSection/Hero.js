import React from "react";
import Header from "./Header";
import "./hero.css";
import Trip from "./TripItem/Trip";
import Modal from "../components/modal/Modal";
import Tripobj from "./TripItem/Tripobj";
// import Trial from '../assets/trial.jpg';
// import Freedom from '../assets/freedom.jpeg';
// import JeepSafari from '../assets/jeepsafari.jpg';
// import Snow from '../assets/snow.jpg';

const Hero = () => {
  return (
    <div className="container hero-section mt-5">
      <Header />
      <div className="trips-four-items d-flex">
        <div className="row trippostion">
          <div className="col-md-6">
            {Tripobj.map((tripData) => (
              <Trip
                imgsrc={tripData.imgsrc}
                title={tripData.title}
                alt={tripData.alt}
                tripcode={tripData.tripCode}
                price={tripData.price}
                Text={tripData.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

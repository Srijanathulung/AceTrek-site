import Trial from "../../assets/trial.jpg";
import Freedom from "../../assets/freedom.jpeg";
import JeepSafari from "../../assets/jeepsafari.jpg";
import Snow from "../../assets/snow.jpg";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";


import React from "react";

const Tripobj = [
  {
    title: "Everest base camp-9days",
    imgsrc: Trial,
    alt: "tiral",
    tripCode: "ATH11422",
    price: "$1,450pp",
    text: "Enjoy an exciting journey across the Khumbu region's trails with the stunning vistas of mountain peaks and the ...",
    toolTip: 
      {
        tiptitle: "ALL DEPARTURE GUARANTEED",
        tipDetail:
          "The trip in this category has departure dates all year round. All the dates are guaranteed to run.",
        icon: <BsCheck />,
        // icon:"HiBadgeCheck"
        className:'success'
      },
    
  },
  {
    title: "Annapurna Base Camp",
    imgsrc: Freedom,
    alt: "feel freedom",
    tripCode: "ATH14184",
    price: "$1,915 pp",
    text: "Have the most magnificent helicopter ride to Everest Base Camp, Khumbu Glacier and Kalapatthar in lower altitude as ...",
    toolTip: 
      {
        tiptitle: "GROUP TRIP",
        tipDetail:
          "This trip has group departure dates and you can join on any date mentioned in departures section.",
        // icon:'HiOutlineUserGroup'
        icon: <HiOutlineUserGroup />,
        className:'danger'
      },
    
  },
  {
    title: "Jeep Safari-wild animals",
    imgsrc: JeepSafari,
    alt: "jeepsafari",
    tripCode: "ATH3222",
    price: "$1,250 pp",
    text: "This 14 days trek combines some of the most spectacular mountain scenery, providing a fascinating insight into the ...",
    toolTip: 
      {
        tiptitle: "TOP SELLER",
        tipDetail:
          " This trip is the best-selling trip where travelers from all around the world frequently book it.",
        icon: <AiFillStar />,
        className:'warning'

        // icon:"AiOutlineStar"
      },
    
  },
  {
    title: "Annapurna -base Camp-14days",
    imgsrc: Snow,
    alt: "snow",
    tripCode: "ATH17028",
    price: " $2,250pp",
    text: "Trek through the restricted Nar-Phu valley, explore the remote Manang region, witness the Buddhist Chortens and embrace the ...",
    toolTip:
      {
        tiptitle: "BEST PRICE",
        tipDetail:
          "Currently, we are offering the best possible discounted price for this trip.",
        icon: <AiFillDollarCircle />,
        className:'info'

        // icon:"AiOutlineDollarCircle"
      },
    
  },
];
export default Tripobj;

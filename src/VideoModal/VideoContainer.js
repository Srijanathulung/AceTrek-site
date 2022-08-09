import React from "react";
import "./VideoContainer.css";
import Mountains from "../assets/mountains.jpeg";
import VideoModal from "./VideoModal";

const VideoContainer = () => {
  return (
    <div className="container-fluid video">

      <div className="coverimage">

        {/* for overlay */}
        <div className="imageoverlay">
          <img
            className="modalvideoimage"
            src={Mountains}
            alt="about mountains"
          />

          {/* for paragraph */}
          <div className="paragraphofimage">
            <p>
              Ace the Himalaya is an idea, that to share with the world the
              passion of <br />
              travelling in the country of Himalayas and help travelers realize
              their dream of <br />
              making lasting memories.
            </p>
          </div>
          <div>
            <VideoModal/>
          </div>
          {/* for paragraph */}  </div>
        {/* for overlay */}
      </div>
    </div>
  );
};

export default VideoContainer;

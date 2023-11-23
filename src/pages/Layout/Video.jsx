import React from "react";
import video from "../../assets/arrow.mp4";
import video from "../../assets/air_bubbles.mp4";

const Video = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;

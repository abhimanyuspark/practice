import React from "react";
import video from "../../assets/arrow.mp4";
import video from "../../assets/air_bubbles.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 240px;
  z-index: -9;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Videos = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Video = () => {
  return (
    <VideoContainer>
      <Videos autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Videos>
    </VideoContainer>
  );
};

export default Video;

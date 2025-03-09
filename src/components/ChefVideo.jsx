import React, { useRef, useState } from "react";
import VideoChef from "../assets/1c-a.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import Breakfast from "../assets/breakfast.png";
import "./ChefVideo.css";

const ChefVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPauseButton, setShowPauseButton] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true); // Video is playing
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false); // Video is paused
  };
  return (
    <div
      id="chefvideo"
      onMouseEnter={() => isPlaying && setShowPauseButton(true)}
      onMouseLeave={() => setShowPauseButton(false)}
    >
      {!isPlaying && <img src={Breakfast} alt="" />}
      <video ref={videoRef} loop muted playsInline>
        <source src={VideoChef} type="video/mp4" />
      </video>

      <div>
        {isPlaying ? "" : <p>Our Chef's Secrets</p>}
        {isPlaying ? (
          ""
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            cupiditate porro deleniti id nobis vero, placeat obcaecati dicta
            incidunt corrupti.
          </p>
        )}
      </div>
      {!isPlaying && (
        <FontAwesomeIcon onClick={handlePlay} icon={faCirclePlay} />
      )}
      {isPlaying && showPauseButton && (
        <FontAwesomeIcon onClick={handlePause} icon={faCirclePause} />
      )}
    </div>
  );
};

export default ChefVideo;

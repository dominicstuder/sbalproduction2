import React from 'react';
import styles from '../BackgroundVideo.module.css';

const Bwr1Video = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        // poster="/images/video-fallback.jpg" // Static fallback image
      >
        <source src="/bwr_video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default Bwr1Video;

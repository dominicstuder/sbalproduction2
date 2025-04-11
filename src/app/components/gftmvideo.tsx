import React from 'react';
import styles from '../BackgroundVideoHome.module.css';

const GFTMVideo = () => {
  return (
    <div className={styles.videoContainer}
    
    
    >
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        
        // poster="/images/video-fallback.jpg" // Static fallback image
      >
        <source src="/gftm_video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default GFTMVideo;

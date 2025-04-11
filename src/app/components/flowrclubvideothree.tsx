import styles from './FlowrclubVideo.module.css';
import React from 'react';

interface FadeInVideoProps {
  src: string;

}



const FlowrclubVideoThree: React.FC<FadeInVideoProps> = ({ src }) => {


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
       <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default FlowrclubVideoThree;


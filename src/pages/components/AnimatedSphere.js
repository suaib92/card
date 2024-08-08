// components/VideoPlayer.js

import React, { useEffect, useState } from 'react';
import styles from './VideoCard.module.css';

const VideoPlayer = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video
        src="https://videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4"
        autoPlay
        muted
        loop
        className={`${styles.videoPlayer} ${styles.waveEffect}`}
        style={{
          clipPath: `url(#svgPath01)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className={styles.liquidEffect}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
    </div>
  );
};

export default VideoPlayer;

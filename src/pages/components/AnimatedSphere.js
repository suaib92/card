import React, { useEffect, useState, useRef } from 'react';
import styles from './VideoCard.module.css';

const VideoPlayer = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.videoContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="0" height="0">
        <filter id="wave">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="5" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="30" />
        </filter>
      </svg>
      <video
        ref={videoRef}
        src="https://videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4"
        muted
        loop
        className={`${styles.videoPlayer} ${styles.waveEffect}`}
        style={{
          clipPath: `url(#svgPath01)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        preload="none"
        autoPlay={false}
      />
      <div
        className={styles.liquidEffect}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
      <div className={styles.gridSphere}>
        <svg width="0" height="0">
          <filter id="gridWarp">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4" result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale="20" />
          </filter>
        </svg>
        <div
          className={styles.sphere}
          style={{
            filter: 'url(#gridWarp)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPlayer;

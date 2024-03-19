import React, { useEffect, useRef, useState } from "react";
import Hero_Banner from "../../../../assets/images/herro_banner.jpg";
import VanillaTilt from "vanilla-tilt";

const HeroBanner = () => {
  const tiltRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const texts = [
    <span><span className="gradient">Discover thousands</span><br /><span className="gradient">of open APIs</span></span>,
    <span><span className="gradient-start">Build unstoppable</span><br /><span className="gradient-start">applications</span></span>,
    <span >
      <span >Access the world’s</span><br /><span >blockchain data</span>
    </span>
  ];

  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: -3,

    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setVideoPlaying(false);
      } else {
        setVideoPlaying(true);
      }
    };

    const timeout1 = setTimeout(() => setCurrentTextIndex(1), 2000);
    const timeout2 = setTimeout(() => setCurrentTextIndex(2), 3600);

    setTimeout(() => setShowVideo(false), 5000);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

    };

  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const handlePlayPause = () => {
    setVideoPlaying(!videoPlaying);
  };
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="hero-banner" ref={tiltRef}>
        <div className="hero-star-1" />
        <div className="hero-star-2" />
        <div className="hero-star-3" />

        <div className="hero-banner-inner">
          <video
            autoPlay={videoPlaying}
            muted
            onEnded={handleVideoEnd}
            className={showVideo ? "hero-banner-inner-show" : 'hero-banner-inner-hidden'}
          >
            <source src="/hero.mp4"
              type="video/mp4" />
          </video>
          <img src={Hero_Banner} className={showVideo ? "hero-banner-inner-hidden" : 'hero-banner-inner-show'}
            alt="hero" loading="lazy" />
        </div>
        <div className="hero-banner-content">
          <div className="inner">

            <h1 className={`${currentTextIndex === 2 && 'inner-h1'}`}>
              <span
                style={{ display: currentTextIndex === 0 ? "block" : "none" }}
              >
                {texts[0]}
              </span>
              <span
                style={{ display: currentTextIndex === 1 ? "block" : "none" }}
              >{texts[1]}
              </span>

              <span
                style={{ display: currentTextIndex === 2 ? "block" : "none", position: 'relative' }}
                className={`
                ${isExploreHovered && "explore-text-animation-2"}
                ${isStart && 'start-text-animation-2'}
                `}

              >
                <span
                  className={"text-title-left"}
                >
                  {texts[0]}
                </span>
                <span
                  className={"text-title-right"}
                >
                  {texts[1]}
                </span>


                {texts[2]}
              </span>

            </h1>

            <div className="hero-banner-btns">
              {currentTextIndex === 2 && (
                <>
                  <button
                    className="btn-explore color-primary"
                    onMouseEnter={() => setIsExploreHovered(true)}
                    onMouseLeave={() => setIsExploreHovered(false)}
                  >
                    Explore Data
                  </button>
                  <button
                    className="btn-start color-primary"
                    onMouseEnter={() => setIsStart(true)}
                    onMouseLeave={() => setIsStart(false)}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroBanner;

import React, { useEffect, useRef, useState } from "react";
import Hero_Banner from "../../../../assets/images/herro_banner.jpg";
import VanillaTilt from "vanilla-tilt";

const HeroBanner = () => {
  const tiltRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  const texts = [
    "Discover thousands<br />of open APIs",
    "Build unstoppable<br />applications",
    "Access the world’s<br />blockchain data"
  ];

  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: -3,
      //   speed: 50,
      //   glare: true,
      //   "max-glare": 0.5,
    });

    const timeout1 = setTimeout(() => setCurrentTextIndex(1), 2000); // Hiển thị văn bản thứ hai sau 2 giây
    const timeout2 = setTimeout(() => setCurrentTextIndex(2), 3600); // Hiển thị văn bản thứ ba sau 4 giây

    setTimeout(() => setShowVideo(false), 5000); // Tắt video sau 5 giây

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };

  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="hero-banner" ref={tiltRef}>
        <div className="hero-star-1" />
        <div className="hero-star-2" />
        <div className="hero-star-3" />

        <div className="hero-banner-inner">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className={showVideo ? "hero-banner-inner-show" : 'hero-banner-inner-hidden'}
          ></video>
          <img src={Hero_Banner} className={showVideo ? "hero-banner-inner-hidden" : 'hero-banner-inner-show'}
            alt="hero" loading="lazy" />
        </div>
        <div className="hero-banner-content">
          <div className="inner">

            <h1>
              <span
                style={{ display: currentTextIndex === 0 ? "block" : "none" }}
                dangerouslySetInnerHTML={{ __html: texts[0] }}
              // className={isExploreHovered ? "explore-text-animation" : ""}

              ></span>
              <span
                style={{ display: currentTextIndex === 1 ? "block" : "none" }}
                dangerouslySetInnerHTML={{ __html: texts[1] }}
              ></span>
              <span
                style={{ display: currentTextIndex === 2 ? "block" : "none" }}
                dangerouslySetInnerHTML={{ __html: texts[2] }}
              // className={isExploreHovered ? "explore-text-animation" : ""}

              ></span>
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
                  <button className="btn-start color-primary">
                    Get Started
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

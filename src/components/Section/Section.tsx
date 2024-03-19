import React, { FC, ReactNode, useRef, useEffect, useState } from 'react';

interface Props {
  className?: string;
  isPaddingTop?: boolean;
  children: (isVisible: boolean) => ReactNode;
}

const Section: FC<Props> = ({ className, isPaddingTop, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasBeenVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${!isPaddingTop ? "section-container" : 'section-container-notp'} ${className}`}
    >
      {children(isVisible)}
    </section>
  );
};

export default Section;

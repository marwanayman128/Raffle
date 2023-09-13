/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from 'react';

const ScrollFadeIn = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false); // New state flag
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting && !animationTriggered) {
        setVisible(true);
        setAnimationTriggered(true); // Set the flag to prevent further animations
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationTriggered]); // Add animationTriggered to the dependency array

  return (
    <div className={`fade-in ${visible ? 'fade-in-visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;

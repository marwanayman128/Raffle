// ScrollFadeIn.js
import  { useEffect, useRef, useState } from 'react';

const ScrollFadeIn = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // When at least 50% of the element is visible
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
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
  }, []);

  return <div className={`fade-in ${visible ? 'fade-in-visible' : ''}`} ref={ref}>{children}</div>;
};

export default ScrollFadeIn;

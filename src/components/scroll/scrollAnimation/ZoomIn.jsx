/* eslint-disable react/prop-types */
import  { useEffect, useState, useRef } from 'react';

const ZoomIn = ({ children, zoomDuration = 1 }) => {
  const [zoomed, setZoomed] = useState(false);
  const zoomRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        setZoomed(true);
      } else {
        setZoomed(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (zoomRef.current) {
      observer.observe(zoomRef.current);
    }

    return () => {
      if (zoomRef.current) {
        observer.unobserve(zoomRef.current);
      }
    };
  }, []);

  const zoomStyle = {
    transition: `transform ${zoomDuration}s ease-in-out`,
    transform: zoomed ? 'scale(1.1)' : 'scale(1)', // You can adjust the scale factor
  };

  return (
    <div ref={zoomRef} style={zoomStyle}>
      {children}
    </div>
  );
};

export default ZoomIn;

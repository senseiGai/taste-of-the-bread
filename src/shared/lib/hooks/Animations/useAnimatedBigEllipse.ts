import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimateBigEllipse = () => {
  const bigEllipseRef = useRef(null);

  useEffect(() => {
    if (!bigEllipseRef.current) return;

    gsap.fromTo(
      bigEllipseRef.current, 
      { x: 150 }, 
      { x: 0, duration: 0.5, ease: "linear", delay: 0.8 }
    ); 

  }, []); 

  return bigEllipseRef;
};

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimateSmallEllipse = () => {
  const ellipseRef = useRef(null);

  useEffect(() => {
    if (!ellipseRef.current) return;

    gsap.fromTo(
      ellipseRef.current, 
      { y: -70 }, 
      { y: 0, duration: 0.5, ease: "linear" }
    ); 

  }, []); 

  return ellipseRef;
};

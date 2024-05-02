import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimateWheat = () => {
  const wheatRef = useRef(null);

  useEffect(() => {
    if (!wheatRef.current) return;

    gsap.fromTo(
        wheatRef.current, 
      { x: 90 }, 
      { x: 0, duration: 0.5, ease: "linear", delay: 1.4 }
    ); 

  }, []); 

  return wheatRef;
};

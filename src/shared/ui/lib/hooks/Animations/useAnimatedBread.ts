import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimatedBread = () => {
  const breadRef = useRef(null);

  useEffect(() => {
    if (!breadRef.current) return;

    gsap.fromTo(
      breadRef.current, 
      { x: -70 }, 
      { x: 0, duration: 1, ease: "linear",  }
    ); 

  }, []); 

  return breadRef;
};

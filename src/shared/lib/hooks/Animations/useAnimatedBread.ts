import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimatedBread = () => {
  const breadRef = useRef(null);

  useEffect(() => {
    console.log("Animating bread:", breadRef.current);
    if (!breadRef.current) return;
  
    gsap.fromTo(
      breadRef.current, 
      { x: -315}, 
      {
        x: 0, 
        duration: 0.5, 
        ease: "linear",
        delay: 1.2
      }
    ); 
  
  }, []);
  
  return breadRef;
};

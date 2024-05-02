import { useEffect } from 'react';
import { gsap } from 'gsap';

const useAnimatedLetters = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (containerRef.current) {
      const elements = Array.from(containerRef.current.children);
      gsap.fromTo(elements, 
        { x: -110 }, 
        {
          x: 0,
          stagger: 0.2,
          ease: "power3.out",
          duration: 0.5,
          delay: 0.5 
        }
      );
    }
  }, [containerRef]);  
};

export default useAnimatedLetters;

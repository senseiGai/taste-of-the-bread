import { useEffect } from 'react';
import { gsap } from 'gsap';

const useAnimatedLetters = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (containerRef.current) {
      const elements = Array.from(containerRef.current.children);
      gsap.fromTo(elements, 
        { x: -100, opacity: 0 }, 
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          duration: 1,
          delay: 1 
        }
      );
    }
  }, [containerRef]);  
};

export default useAnimatedLetters;

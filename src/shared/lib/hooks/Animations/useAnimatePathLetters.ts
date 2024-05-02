import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimatePathLetters = (ids) => {
  const refs = ids.map(() => useRef(null));

  useEffect(() => {
    ids.forEach((id, index) => {
      const element = refs[index].current;
      if (element) {
        gsap.fromTo(element, { opacity: 0 }, {
          opacity: 1,
          delay: index * 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  }, []);

  return refs; // Return array of refs
};

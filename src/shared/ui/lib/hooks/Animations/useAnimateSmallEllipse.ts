import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useAnimateSmallEllipse = () => {
  const ellipseRef = useRef(null);

  useEffect(() => {
    if (!ellipseRef.current) return;

    // Animate the ellipse using GSAP
    gsap.fromTo(
      ellipseRef.current, 
      { y: -70 }, // Start from the top (e.g., y = -100)
      { y: 0, duration: 1, ease: "linear" }
    ); // Move the ellipse from the top to its position over 2 seconds

  }, []); // Run once on component mount

  return ellipseRef;
};

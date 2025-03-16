
import { RefObject, useEffect, useState } from 'react';

// Check if an element is in the viewport
export const useInView = (ref: RefObject<HTMLElement>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback is called
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

// Animation classes based on viewport visibility
export const getAnimationClass = (inView: boolean, animation: string): string => {
  if (!inView) return 'opacity-0';
  
  switch (animation) {
    case 'fade-up':
      return 'animate-fade-up';
    case 'fade-down':
      return 'animate-fade-down';
    case 'fade-in':
      return 'animate-fade-in';
    case 'slide-in-right':
      return 'animate-slide-in-right';
    default:
      return 'animate-fade-in';
  }
};

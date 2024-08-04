import { useState, useEffect } from 'react';

const useScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  const [displayBackToTop, setDisplayBackToTop] = useState(false);

  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollTo = (element: any, to = 0, duration = 500) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setDisplayBackToTop(true);
      } else {
        setDisplayBackToTop(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if (backToTop) {
      scrollTo(document.documentElement);
      setBackToTop(false);
    }
  }, [backToTop]);

  return { displayBackToTop, setBackToTop };
};

export default useScrollToTop;

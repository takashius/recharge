import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const pageLinks = document.querySelectorAll('.menu-scroll');

    const handleClick = (e: any) => {
      e.preventDefault();
      try {
        console.log('window.location.pathname', window.location.pathname)
        if (window.location.pathname != '/') {
          throw "empty"
        }
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } catch (error) {
        window.location.href = '/'
      }
    };

    pageLinks.forEach((elem) => {
      elem.addEventListener('click', handleClick);
    });

    return () => {
      pageLinks.forEach((elem) => {
        elem.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSmoothScroll;

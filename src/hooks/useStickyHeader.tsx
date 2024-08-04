import { useEffect } from 'react';

const useStickyHeader = () => {

  useEffect(() => {
    const handleScroll = () => {
      const ud_header = document.querySelector('.header');
      const sticky = ud_header instanceof HTMLElement ? ud_header.offsetTop : 0;

      if (window.pageYOffset > sticky) {
        ud_header && ud_header.classList.add('sticky');
      } else {
        ud_header && ud_header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

};

export default useStickyHeader;

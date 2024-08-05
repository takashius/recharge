import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  useEffect(() => {
    const html = document.querySelector('html');

    const darkModeToggler = () => {
      if (html) {
        console.log('si hay html', darkMode);
        !darkMode ? html.classList.remove('dark') : html.classList.add('dark');
      }
    };

    darkModeToggler();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return toggleDarkMode;
};

export default useDarkMode;

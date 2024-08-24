import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
  loading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light')
  const [first, setFirst] = useState<boolean>(true)
  const [loading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (first) {
      setFirst(false)
      const currentTheme = localStorage.getItem('theme') || 'light'
      setTheme(currentTheme)
      document.documentElement.className = currentTheme
    } else {
      document.documentElement.className = theme
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, loading, setIsLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

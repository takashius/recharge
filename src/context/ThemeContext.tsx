import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react'
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles'

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
  const muiTheme = createTheme({ palette: { mode: theme == 'dark' ? 'dark' : 'light' } })

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
      <ThemeProviderMui theme={muiTheme}>
        {children}
      </ThemeProviderMui>
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

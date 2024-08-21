import {createContext, useContext, useEffect, useState} from 'react';
import {ThemeContextType, ThemeContextProviderType} from '../types';
import {DARKMODECOLORS, LIGHTMODECOLORS} from '@configs';
import {useColorScheme} from 'react-native';


export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({children}: ThemeContextProviderType) => {
  const darkTheme = useColorScheme() == 'dark';
  const [isDarkMode, setIsDark] = useState(darkTheme);
  const colors = darkTheme ? DARKMODECOLORS : LIGHTMODECOLORS;
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("No Theme Context is set up")
  }

  return context;
};

export {ThemeProvider, useAppTheme};

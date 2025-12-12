import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { createStyles } from '../styles/theme';

// 1️⃣ Define the context type
type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  styles: ReturnType<typeof createStyles>;
};

// 2️⃣ Create context with typed default (undefined is OK)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = { children: ReactNode };

// 3️⃣ Provider
export const ThemeProvider = ({ children }: Props) => {
  // const deviceTheme = useColorScheme() || 'light';
  const deviceTheme = 'light';
  const [theme, setTheme] = useState<'light' | 'dark'>(deviceTheme);
  const [styles, setStyles] = useState(createStyles(deviceTheme));

  useEffect(() => {
    setStyles(createStyles(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles }}>
      {children}
    </ThemeContext.Provider>
  );
};

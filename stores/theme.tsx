import React, {createContext, FC, useEffect, useState} from "react";
import {Themes} from "@/constants/enum";

interface IThemeContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

interface IProps {
  children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
)

export const ThemeContextProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(Themes.light);

  useEffect(() => {
    const item = localStorage.getItem('theme') as Themes || Themes.light
    setTheme(item)
    document.getElementsByTagName('html')[0].dataset.theme = item;
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (currentTheme) => {
          setTheme(currentTheme);
          localStorage.setItem('theme', currentTheme);
          document.getElementsByTagName('html')[0].dataset.theme = currentTheme;
        }
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
import React from 'react'

export const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
})

export const ThemeProvider = ThemeContext.Provider

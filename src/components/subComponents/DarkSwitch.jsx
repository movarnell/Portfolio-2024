import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const DarkSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-yellow-100 text-gray-800'}`}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default DarkSwitch

import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import DarkSwitch from './components/subComponents/DarkSwitch'
import './App.css'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import projects from './components/subComponents/projects'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }
console.log("above return:", projects)
  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className={` min-h-screen pb-5 transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-200'}`}>
        <header className="container px-4 py-4 mx-auto">
          <div className="flex justify-end">
            <DarkSwitch />
          </div>
        </header>
        <div className="container mx-auto ">
          <main className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            <Hero />
            <div className="px-4 mx-auto">
              <div className="grid grid-cols-1 gap-5 pb-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => {
                  return (
                    <div key={project.title}>
                      {console.log("project:", project.title)}
                      <ProjectCard project={project} />
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

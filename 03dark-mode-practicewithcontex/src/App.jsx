import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Theme from './components/Theme'
import { ThemeProvider } from './contex/themeContext'

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const lightTheme = () => {
    setThemeMode('light');
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='w-[1200px] mx-auto p-5'>
        <div className='flex flex-col items-center'>
          <Theme />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

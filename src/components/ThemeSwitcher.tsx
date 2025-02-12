import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import { Button } from './ui/button'


const ThemeSwitcher = () => {
    const themeContext = useContext(ThemeContext);  

    if(!themeContext){
        return <p>Error: ThemeContext not available...</p>
    }

    const {theme, setTheme} = themeContext;
  return (
    <Button
        className=' p-2 mt-4 border rounded'
        onClick={() => setTheme(theme === "light"?"dark":"light")}
    >
        Switch to {theme === "light"?"dark":"light"} mode
    </Button>
  )
}

export default ThemeSwitcher
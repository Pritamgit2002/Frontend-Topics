import { useToggleMode } from '@/hooks/useToggleMode'
import React from 'react'

type Props = {}

const Togglemode = (props: Props) => {

   const [theme, setTheme] = useToggleMode<"Light" | "Dark">("Theme","Light");

   const toggleTheme = () =>{
    setTheme(theme === "Light" ? "Dark" : "Light");
   }

  return (
    <div className={`h-[25vh] flex items-center justify-center bg-${theme==="Light"?"black":"white"}`}>
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 text-white rounded-md"
    >
      Toggle to {theme === "Light" ? "Dark" : "Light"} Mode
    </button>
  </div>
  )
}

export default Togglemode
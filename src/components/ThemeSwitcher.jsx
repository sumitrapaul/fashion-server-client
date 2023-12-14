import { useEffect, useState } from "react";


const ThemeSwitcher = () => {

    const [darkMode, setDarkMode]=useState(false)

    useEffect(()=>{
    const isDarkMode=localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    },[])


    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
        localStorage.setItem('darkMode',darkMode)
    },[darkMode])

    const toggleDarKMode=()=>{
        setDarkMode((previousMode) => !previousMode)
    }

    return (
        <div>
            <button
    onClick={toggleDarKMode}
    className={`px-4 py-2 rounded-full ${
      darkMode ? 'bg-yellow-400' : 'bg-gray-600'
    } ${
      darkMode ? 'text-gray-900' : 'text-white'
    } transition-colors duration-100`}
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
        </div>
    );
};

export default ThemeSwitcher;
import React from 'react'
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

  return (
     <header className="flex justify-between p-4 border-b dark:border-gray-700">
            <nav className="space-x-4">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </header>
  )
}

import React, { useState, useRef, useEffect } from 'react';
import './Activity5.css';

function ThemeToggler() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const inputRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={`theme-toggler ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>

      <br />
      
      <input
        ref={inputRef}
        type="text"
        placeholder="I will be focused on load"
        className="input-field"
      />
    </div>
  );
}

export default ThemeToggler;

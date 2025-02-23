import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);


return (
  <div className='app' id={`${theme}`}>
    <main>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <About />
      <Body />
    </main>
    <Footer />
  </div>
);
};

export default App;
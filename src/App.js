import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import useLocalStorage from 'use-local-storage'
import {Header , About , Projects , Contact , Footer} from "./containers"
import './index.css'

function App() {
  
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
      <Navbar/>
      <Header />
      <About switchTheme={switchTheme} theme={theme} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

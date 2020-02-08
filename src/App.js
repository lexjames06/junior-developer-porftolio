import React, { useState } from 'react';
import MobileMenuButton from './frontend/components/MobileMenuButton/MobileMenuButton'
import MobileMenu from './frontend/components/MobileMenu/MobileMenu'
import './App.css';

function App() {
  
  let [darkMode, setDarkMode] = useState(false);
  let [menuVisible, setMenuVisible] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleMenuVisible() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className={`app${darkMode ? ' app-dark' : '' }`}>
      <Background />
      <MobileMenu menuVisible={menuVisible} darkMode={darkMode} toggleDarkMode={() => toggleDarkMode()} />
      <MobileMenuButton
        menuVisible={menuVisible}
        toggleMenuVisible={() => toggleMenuVisible()}
        darkMode={darkMode}
      />
    </div>
  );
}

function Background() {
  return (
    <div>
      <div className='background'>
      </div>
      <div className='title'>
        <h1 id='nickname'>LJ</h1>
        <h1 id='job'>Junior Developer</h1>
      </div>
    </div>
  );
}

export default App;

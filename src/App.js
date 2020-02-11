import React, { useState } from 'react';
import MobileMenuButton from './frontend/components/MobileMenuButton/MobileMenuButton'
import MobileMenu from './frontend/components/MobileMenu/MobileMenu'
import Background from './frontend/components/Background/Background'
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
      <div className='hide-overflow'>
        <Background darkMode={darkMode} />
        <MobileMenu menuVisible={menuVisible} darkMode={darkMode} toggleDarkMode={() => toggleDarkMode()} />
        <MobileMenuButton
          menuVisible={menuVisible}
          toggleMenuVisible={() => toggleMenuVisible()}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;

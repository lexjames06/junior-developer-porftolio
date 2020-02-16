import React from 'react';
import MobileMenuButton from './frontend/components/MobileMenuButton/MobileMenuButton'
import MobileMenu from './frontend/components/MobileMenu/MobileMenu'
import Background from './frontend/components/Background/Background'
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const darkMode = useSelector(state => state.darkMode);

  return (
    <div className={`app${darkMode ? ' app-dark' : '' }`}>
      <div className='hide-overflow'>
        <Background />
        <MobileMenu />
        <MobileMenuButton />
      </div>
    </div>
  );
}

export default App;

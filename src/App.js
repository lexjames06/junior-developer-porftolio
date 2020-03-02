import React from 'react';
import MobileMenu from './frontend/components/MobileMenu/MobileMenu'
import Background from './frontend/components/Background/Background'
import Header from './frontend/components/Header/Header'
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  document.title = 'LJ Portfolio'

  const darkMode = useSelector(state => state.darkMode);

  return (
    <div className={`app${darkMode ? ' app-dark' : '' }`}>
      <div className='hide-overflow'>
        <Header />
        <Background />
        <MobileMenu />
      </div>
    </div>
  );
}

export default App;

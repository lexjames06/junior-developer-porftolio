import React from 'react'
import MobileMenuButtonHeader from '../MobileMenuButtonHeader/MobileMenuButtonHeader'
import './Header.css'

export default function Header() {
    return (
        <div className='header-container'>
            <h3>LJ</h3>
            <MobileMenuButtonHeader />
        </div>
    );
}
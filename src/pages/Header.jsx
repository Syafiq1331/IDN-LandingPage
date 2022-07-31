import React from 'react'
import Navbar from './Navbar'
import Hero from '../components/Hero'
import News from '../components/News'

function Header() {
    return (
        <header>
            <Navbar />
            <Hero />
            <News />

        </header>

        
    )
}

export default Header
import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                
            </div>
            <div className='hero'>
                <ul>
                    <a href='/home'>MEN</a>
                    <a href='/about'>WOMAN</a>
                    <a href='/items'>KIDS</a>
                    <a href='/list'>HOME & LIVING</a>
                    <a href='/list'>BEAUTY</a>
                    <a href='/list'>STUDIO <sup>NEW</sup></a>
                </ul>
            </div>
            <div className='search'>
                <input placeholder='Search' text=""/>

            </div>
            <div>
                <a>Profile</a>
                <a>Wishlist</a>
                </div>
            <a href=''><p>cart <sup className='counter'>5</sup></p></a>
        </div>
    )
}

export default Header

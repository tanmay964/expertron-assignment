import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className = "header">
            <div className = "header-left">
                <img src = "/img/expertrons.jpg" className ="header-logo"></img>
            </div>
            <div className = "header-right">
                <button>My Dashboard</button>
            </div>
        </div>
    )
}

export default Header

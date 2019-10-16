import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <br />
            <br />
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/Agenda'>Agenda</Link>
        <br />
        <br />
        </header>
    )
}
export default Header;
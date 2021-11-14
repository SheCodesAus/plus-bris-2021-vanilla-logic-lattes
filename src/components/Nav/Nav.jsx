import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const history = useHistory();
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navSlide = () => {

        setNavbarOpen(!navbarOpen)
    }
    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false)
        history.push('/login')
    }
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("token"))


    return (
        <nav>
            <div className="logo">
                <Link className="logo" to="/">Sprinkles 🍩</Link>
            </div>
            <div className={`nav-links ${navbarOpen ? " nav-active" : ""}`}>
                {isLoggedIn && <Link className="nav-link" to="/">Home</Link>}
                {!isLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
                {isLoggedIn && <button onClick={logout} className="nav-link" to="/login">Logout</button>}
                {!isLoggedIn && <Link className="nav-link" to="/register">Register</Link>}

            </div>
            <div className={`burger`} onClick={navSlide}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>



        </nav>
    );
}

export default Nav;
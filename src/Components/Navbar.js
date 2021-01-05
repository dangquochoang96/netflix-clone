import React, {useEffect, useState} from 'react'
import './styles/Navbar.css'
import NetflixLogo from './img/logo.png'
import UserAvatar from './img/avatar.png'

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src={NetflixLogo} alt="Netflix Logo" />
            <img className="nav_avatar" src={UserAvatar} alt="Avatar" />
        </div>
    )
}

export default Navbar
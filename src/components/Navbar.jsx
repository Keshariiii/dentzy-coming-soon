

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/new_logo.jpg'; // Updated to specific user-provided logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo-section">
                    <Link to="/" onClick={closeMenu}>
                        {/* Using text fallback if logo image doesn't match Dark BG, or wrapper */}
                        <img src={logo} alt="DENTZY" className="logo-img" />
                    </Link>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
                    </ul>
                    <a href="#get-started" className="btn btn-primary nav-cta" onClick={toggleMenu}>Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

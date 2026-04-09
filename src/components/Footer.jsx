import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/new_logo.jpg';

const Footer = () => {
    return (
        <footer className="footer animate-on-scroll">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src={logo} alt="DENTZY" className="footer-logo" />
                    <p className="footer-tagline">
                        Premium Dental Solutions for the Modern Practice.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>India</p>
                    <p>Email: support@dentzy.com</p>
                    <div className="footer-socials">
                        {/* Social Placeholders */}
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} DENTZY. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

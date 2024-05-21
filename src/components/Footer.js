import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Wallet Watch</h2>
                    <div className="social-icons">
                        <a href="http://127.0.0.1:3000">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="http://127.0.0.1:3000">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="http://127.0.0.1:3000">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="http://127.0.0.1:3000">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <Link to="/" className="footer-button">Home</Link>
                    <Link to="/features" className="footer-button">Features</Link>
                    <Link to="/about" className="footer-button">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

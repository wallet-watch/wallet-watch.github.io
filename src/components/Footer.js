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
                        <a href="https://wallet-watch.github.io/">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://wallet-watch.github.io/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://wallet-watch.github.io/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://wallet-watch.github.io/">
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

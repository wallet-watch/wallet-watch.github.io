import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footerdiv}>
            <div className={styles.footercontent}>
                <div className={styles.footerleft}>
                    <h2>Wallet Watch</h2>
                    <div className={styles.socialicons}>
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
                <div className={styles.footerright}>
                    <Link to="/" className={styles.footerbutton}>Home</Link>
                    <Link to="/features" className={styles.footerbutton}>Features</Link>
                    <Link to="/about" className={styles.footerbutton}>About</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavEle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <NavLink to="/" >
          <img src={require('../asessts/images/logoww.png')} alt='logo' className={styles.img} />
        </NavLink>
        <Bars onClick={handleToggle} />
        <NavMenu>
          <NavLink to="/home" activestyle>
            Home
          </NavLink>
          <NavLink to="/features" activestyle>
            Features
          </NavLink>
          <NavLink to="/about" activestyle>
            About
          </NavLink>
        </NavMenu>
          <a href="https://wallet-watch.github.io/" className={`${styles.overlayNavLink} ${styles.NavBtn} ${styles.NavBtnLink}`}>
            Get App
          </a>
      </Nav>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}>
        <button className={styles.closeBtn} onClick={handleToggle}>×</button>
        <nav className={styles.overlayMenu}>
          <NavLink to="/home" onClick={handleToggle}>
            Home
          </NavLink>
          <NavLink to="/features" onClick={handleToggle}>
            Features
          </NavLink>
          <NavLink to="/about" onClick={handleToggle}>
            About
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

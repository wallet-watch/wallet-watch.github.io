import styles from "./Hero.module.css";
import React from "react";

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Wallet Watch</h1>
                <p>Get Wallet watch and be stressless</p>
            </div>
        </div>
    )
}
export default Hero
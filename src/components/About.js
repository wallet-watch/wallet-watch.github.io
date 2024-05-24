import styles from './About.module.css'
import React from 'react'

const About = () => {
    return(
        <div>
            <div className={styles.about}>
            <h1 className={styles.heading1}>About</h1>
            <p className={styles.subhead1}> Short description about our project and the Our Team</p>
            </div>
        </div>
    )
}
export default About
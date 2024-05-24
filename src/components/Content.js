import React from "react";
import styles from './Content.module.css';
import Playstore from '../asessts/images/playstore.png'
import Appstore from '../asessts/images/appstore.png'

const Content = () => {
    return (
        <div className={styles.content}>
            <table cellSpacing="10" className={styles.table}>
                <tr>
                    <td>
                        <h2 className={styles.contenttext}>Get the App</h2>
                    </td>
                    <td>
                        <a href="https://wallet-watch.github.io/">
                            <img src={Playstore} alt="playstore-img" className={styles.playstore} />
                        </a>
                    </td>
                    <td>
                        <a href="https://wallet-watch.github.io/">
                            <img src={Appstore} alt="appstore-img" className={styles.appstore} />
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Content
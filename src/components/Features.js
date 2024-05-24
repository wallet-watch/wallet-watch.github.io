import styles from './Features.module.css';
import React from 'react';

const Features = () => {
    return (
        <div>
            <div className={styles.heading}>
            <div className={styles.content}>
                <h1>Features</h1>
                <p>These are the things you can get from our app</p>
            </div>
            </div>
            <div>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Tax  Calculation
                        </div>
                        <h3 className={styles.title}>
                        Real-time analysis of Tax liabilities
                        </h3>
                    </div>
                </article>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Income & Expense Track
                        </div>
                        <h3 className={styles.title}>
                        Identification of individual Income and Expense transactions and automated notifications of transactions without any need of user
                        </h3>
                    </div>
                </article>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Analyze Income
                        </div>
                        <h3 className={styles.title}>
                        Analysis of every individual Income sources
                        </h3>
                    </div>
                </article>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Adjust Budget
                        </div>
                        <h3 className={styles.title}>
                        Multiple budget configurations
                        </h3>
                    </div>
                </article>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Report Generation
                        </div>
                        <h3 className={styles.title}>
                        Instantaneous financial report generation
                        </h3>
                    </div>
                </article>
                <article className={`${styles.articlecontainer} ${styles.animatebackground}`}>
                    <div className={styles.articlecontent}>
                        <div className={styles.head}>
                        Highend Security
                        </div>
                        <h3 className={styles.title}>
                        End-to-End Encryption and Device Authorization
                        </h3>
                    </div>
                </article>
                
            </div>
        </div>
    )
}
export default Features
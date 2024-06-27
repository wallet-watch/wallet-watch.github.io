import React, { useEffect, useState } from 'react';
import Imghero from '../asessts/images/mainweb.jpg';
import styles from './Img.module.css';
import { useInView } from 'react-intersection-observer';
import Imghero2 from '../asessts/images/main2.jpg';
import Imgheromob from '../asessts/images/mainweb-mob.jpg';


const Img = () => {

  const [imageSrc, setImageSrc] = useState(Imghero);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc(Imgheromob);
      } else {
        setImageSrc(Imghero);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.middleimg}>
      <div className={styles.paragraphs}>
        <h1 className={styles.wallet}>
          <span className={styles.colorchng}>Coming Soon</span> in Play Store
        </h1>
      </div>
      <div className={styles.heroimg}>
        <img src={imageSrc} alt="hero-img" className={styles.heroimgs} />
      </div>
      <table cellSpacing="20">
        <tr>
          <td>
            <h3 className={styles.headline}>Track Your Finances with Walletwatch</h3>
          </td>
          <td>
            <div>
              <img src={Imghero2} alt="hero2" className={styles.hero2} />
            </div>
          </td>
        </tr>
      </table>
      <div className={styles.largetext}>
        <p className={styles.paragraph}>
          <span className={styles.high}>U</span>nlock the power of financial control with Walletwatch. Seamlessly track all your income and expenses, create personalized budget plans, and calculate your tax liabilities with ease. Our app also empowers you to generate detailed financial reports, giving you a comprehensive overview of your financial health. Take the first step towards smarter financial management. Get Walletwatch today!
        </p>
      </div>
    </div>
  );
};

export default Img;

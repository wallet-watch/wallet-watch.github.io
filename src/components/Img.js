import React, { useEffect, useState } from 'react';
import Imghero from '../asessts/images/mainweb.jpg';
import styles from './Img.module.css';
import { useInView } from 'react-intersection-observer';
import Imghero2 from '../asessts/images/main2.jpg';
import Imgheromob from '../asessts/images/mainweb-mob.jpg';
import emojiSalary from '../asessts/images/eyes.svg'; // Example emoji image
import emojiThinking from '../asessts/images/face-with-rolling-eyes.svg'; // Example emoji image
import emojiConfused from '../asessts/images/thinking-face.svg'; // Example emoji image
import emojiSweating from '../asessts/images/weary-face.svg'; // Example emoji image
import Typewriter from 'typewriter-effect'

const Img = () => {

  const typewriterStrings = [
    `Got your Salary <img src="${emojiSalary}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />?`,
    `How to spend your salary in an efficient way? <img src="${emojiThinking}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`,
    `No idea about how your money lost? <img src="${emojiConfused}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`,
    `Don't know how to pay taxes? <img src="${emojiSweating}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`
  ];

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

  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !startTyping) {
      setStartTyping(true);
    }
  }, [inView, startTyping]);

  return (
    <div className={styles.middleimg}>
      <div className={styles.paragraphs}>
        <div className={styles.box}>
          <h1 ref={ref} className={styles.emoji}>
          {startTyping && (
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriterStrings.forEach((string, i) => {
                    typewriter.typeString(string).pauseFor(2500).deleteAll();
                    if (i === typewriterStrings.length - 1) {
                      typewriter.start();
                    }
                  });
                }}
              />
            )}
          </h1>
        </div>
        <h1 className={styles.wallet}>
          Get <span className={styles.colorchng}>WalletWatch!</span>
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

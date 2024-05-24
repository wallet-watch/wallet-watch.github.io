import React from "react";
import { useState, useEffect } from "react"
import Imghero from '../asessts/images/mainweb.jpg';
import styles from "./Img.module.css";
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import Imghero2 from '../asessts/images/main2.jpg'
import Imgheromob from '../asessts/images/mainweb-mob.jpg'

const Img = () => {

  const [imageSrc, setImageSrc] = useState(Imghero);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768){
        setImageSrc(Imgheromob);
      }else{
        setImageSrc(Imghero);
      }
    };

  handleResize();

  window.addEventListener('resize', handleResize);

  return() => {
    window.removeEventListener('resize',handleResize);
  };

}, []);

  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Start typing effect when the element comes into view
  if (inView && !startTyping) {
    setStartTyping(true);
  }
 
  return (
    <div className={styles.middleimg}>

      <div className={styles.paragraphs}>
        <div className={styles.box}>
        <h1 ref={ref} className={styles.emoji}>
          {startTyping && (
            <Typewriter
              options={{
                strings: [
                  "Got your Salary 👀?",
                  "How to spend your salary in an efficient way? 🤔", 
                  "No idea about how your money lost? 🤯", 
                  "Don't know how to pay taxes? 😓"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          )}
        </h1>
        </div>
        <h1 className={styles.wallet}>Get <span className={styles.colorchng}>WalletWatch!</span></h1>
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
        <p className={styles.paragraph}><span className={styles.high}>U</span>nlock the power of financial control with Walletwatch. Seamlessly track all your income and expenses, create personalized budget plans, and calculate your tax liabilities with ease. Our app also empowers you to generate detailed financial reports, giving you a comprehensive overview of your financial health. Take the first step towards smarter financial management. Get Walletwatch today!</p>
      </div>
    </div>
  )
}
export default Img

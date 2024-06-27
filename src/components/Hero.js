import styles from "./Hero.module.css";
import React from "react";
import Typewriter from 'typewriter-effect'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emojiSalary from '../asessts/images/eyes.svg'; // Example emoji image
import emojiThinking from '../asessts/images/face-with-rolling-eyes.svg'; // Example emoji image
import emojiConfused from '../asessts/images/thinking-face.svg'; // Example emoji image
import emojiSweating from '../asessts/images/weary-face.svg'; // Example emoji image


const Hero = () => {

    const typewriterStrings = [
        `Got your Salary <img src="${emojiSalary}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />?`,
        `How to spend your salary in an efficient way? <img src="${emojiThinking}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`,
        `No idea about how your money lost? <img src="${emojiConfused}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`,
        `Don't know how to pay taxes? <img src="${emojiSweating}" alt="emoji" style="width: 1em; height: 1em; vertical-align: middle;" />`
      ];

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

    return(
        <div className={styles.hero}>
            
            <div className={styles.content}>
                <div className={styles.paragraphs}>
                <h1 ref={ref} className={styles.emoji}></h1>
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
                </div>
                <h1>Wallet Watch</h1>
                <p>Get Wallet watch and be stressless</p>
                <h2>IIT Ideathon Finalist</h2>
            </div>
        </div>
    )
}
export default Hero
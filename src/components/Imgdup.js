import React, { useState } from "react";
import Imghero from '../asessts/images/mainweb.jpg';
import "./Img.css";
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

const Img = () => {

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
    <div className="middle-img">
      <div className="paragraphs">
      <h1 ref={ref} className="first-left">
          {startTyping && (
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Got your Salary 👀?")
                .start();
            }}
            />
          )}
        </h1>
        <h1 ref={ref} className="first-right">
          {startTyping && (
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Don't know how to spend your salary in a efficient way?")
                .start();
            }}
            />
          )}
        </h1>
        <h1 ref={ref} className="second-left">
          {startTyping && (
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("No idea about how your money lost?")
                .start();
            }}
            />
          )}
        </h1>
        <h1 ref={ref} className="second-right">
          {startTyping && (
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Don't know how to pay taxes?")
                .start();
            }}
            />
          )}
        </h1>
      </div>
      <div className="heroimg">
        <img src={Imghero} alt="hero-img" className="hero-img" />
      </div>
      <h3 className="headline">Track Your Finances with Walletwatch</h3>
      <p className="paragraph">Unlock the power of financial control with Walletwatch. Seamlessly track all your income and expenses, create personalized budget plans, and calculate your tax liabilities with ease. Our app also empowers you to generate detailed financial reports, giving you a comprehensive overview of your financial health. Take the first step towards smarter financial management. Get Walletwatch today!</p>
    </div>
  )
}
export default Img
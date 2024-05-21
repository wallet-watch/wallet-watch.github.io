import React from "react";
import { useState } from "react"
import Imghero from '../asessts/images/mainweb.jpg';
import "./Img.css";
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import Imghero2 from '../asessts/images/main2.jpg'

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
      <h1 ref={ref}>
        {startTyping && (
          <Typewriter
            options={{
              strings: ["Got your Salary 👀?","How to spend your salary in a efficient way? 🤔","No idea about how your money lost? 🤯","Don't know how to pay taxes? 😓"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
            }}
          />
        )}
      </h1>
      <h1 className="wallet">Get <span className="colorchng">WalletWatch!</span></h1>
      </div> 
      <div className="heroimg">
        <img src={Imghero} alt="hero-img" className="hero-img" />
      </div>
      <table cellSpacing="20">
        <tr>
          <td>
            <h3 className="headline">Track Your Finances with Walletwatch</h3>
          </td>
          <td>
            <div>
              <img src={Imghero2} alt="hero2" className="hero2"/>
            </div>
          </td>
        </tr>
      </table>
      <div className="largetext">
      <p className="paragraph"><span className="high">U</span>nlock the power of financial control with Walletwatch. Seamlessly track all your income and expenses, create personalized budget plans, and calculate your tax liabilities with ease. Our app also empowers you to generate detailed financial reports, giving you a comprehensive overview of your financial health. Take the first step towards smarter financial management. Get Walletwatch today!</p>
      </div>
    </div>
  )
}
export default Img

import './Features.css';
import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="heading">
            <div className="content">
                <h1>Features</h1>
                <p>These are the things you can get from our app</p>
            </div>
            </div>
            <div className='features'>
                <h3 className='firsthead'>Tax</h3>
                <p className='first'>Real-time analysis of Tax liabilities</p>
                <h3 className='secondhead'>Income & Expense Track</h3>
                <p className='second'>Identification of individual Income and Expense transactions and automated notifications of transactions without any need of user</p>
                <h3 className='firsthead'>Analyze Income</h3>
                <p className='second'>Analysis of every individual Income sources</p>
                <h3 className='firsthead'>Adjust Budget</h3>
                <p className='second'>Multiple budget configurations</p>
                <h3 className='firsthead'>Report Generation</h3>
                <p className='second'>Instantaneous financial report generation</p>
                <h3 className='firsthead'>Highend Security</h3>
                <p className='second'>End-to-End Encryption and Device Authorization</p>
            </div>
        </div>
    )
}
export default Features
import React from 'react'
import './Team.css'

const teamMembers = [
    {
        name: "Randev",
        role: "Developer, Business Analyst, Designer",
        imageUrl : "data:image/png;base64,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",
        twitterUrl: "#",
        linkedinUrl: "#"
    },
    {
        name: 'Ishara',
        role: 'Developer, Designer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
        twitterUrl: '#',
        linkedinUrl: '#'
      },
      {
        name: 'Thisuni',
        role: 'Business Analyst, Designer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
        twitterUrl: '#',
        linkedinUrl: '#'
      },
      {
        name: 'Chithaa',
        role: 'Developer, Designer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
        twitterUrl: '#',
        linkedinUrl: '#'
      },
      {
        name: 'Kavindu',
        role: 'Developer, Designer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
        twitterUrl: '#',
        linkedinUrl: '#'
      }
]

const Team = () => {
  return (
    <div>
      <section className="team-section">
      <div className="team-heading">
        <h1>Our team</h1>
        <p>We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-icons">
              <a href={member.twitterUrl} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.linkedinUrl} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className='team-section'>
        <div className='pro-heading'>
            <h1>Our Project</h1>
            <div>
                <h4>At WalletWatch, we understand the complexities of managing personal finances in today's fast-paced world. That's why we're developing an innovative budget tracking and tax calculation application designed to simplify and streamline your financial life.WalletWatch is your ultimate personal finance assistant, combining powerful tools with a user-friendly interface to help you take control of your money. Our app is built to cater to all your financial needs, whether it's keeping track of your daily expenses, setting and sticking to a budget, or ensuring you’re prepared for tax season.<p>Take the stress out of managing your finances. Join the WalletWatch App today and experience the future of personal finance management. Whether you're looking to save more, spend wisely, or just keep better track of your money, WalletWatch is here to help.</p></h4>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Team

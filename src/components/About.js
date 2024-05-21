import './About.css'
import React from 'react'
import Img from '../asessts/images/team.png'

const About = () => {
    return(
        <div>
            <div className='about'>
            <h1 className='heading1'>About</h1>
            <p className='subhead1'> Short description about our project and the Our Team</p>
            </div>
            <div className='textpart'>
                <h4>Our goal is to build a app that can do call the tax calculation and adjust the customer budget regarding to their needs. Most of the time people have trouble doing their taxes and balancing budget. So our team is trying to make their life better</h4>
                <h1>BlackPerl</h1>
                <h4>Our team (Blackperl) consist of five members and Minim ipsum minim do officia fugiat nostrud ad ipsum do anim ea enim incididunt. Incididunt nisi ullamco ullamco incididunt. Irure consectetur irure reprehenderit sit cupidatat Lorem laborum esse labore occaecat cupidatat ullamco excepteur deserunt. <b/> Reprehenderit mollit tempor pariatur officia cupidatat labore officia do non eiusmod et aliqua sunt est. Deserunt dolore labore cupidatat dolore amet occaecat deserunt dolore. Id fugiat dolore sint est ullamco aliqua excepteur.</h4>
            </div>
            <img src={Img} alt='team' className='teampic' />
        </div>
    )
}
export default About
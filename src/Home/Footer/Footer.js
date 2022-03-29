import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className='mt-5 footer'>
            <div>
                <h4>CONTACT</h4>
                <p>example@email.com</p>
                <p>+220118241</p>
                <p>www.example.com</p>
                <p>Bogura, Bangladesh</p>
           </div>
            <div>
            <h4>POPULAR  COURSES</h4>
                <p>MERN STACK</p>
                <p>Robotics</p>
                <p>Software Development</p>
                <p>Data Science</p>
           </div>
            <div>
            <h4>USEFUL LINKS</h4>
                <p>Digital Trends</p>
                <p>Hacker Noon</p>
                <p>TechRepublic</p>
                <p>Android Authority</p>
           </div>
            <div>
            <h4>ABOUT Edge-Tech</h4>
                <p>OUR BLOGS</p>
                <p>OUR VIDEOS</p>
                <p>GET IN TOUCH</p>
                <p>ABOUT US</p>
            </div>
          
            
            </div>
        
            <div className='copyr'>
                <p>©Copyright by Nayim Hasan</p>
            </div>
            </>
    );
};

export default Footer;
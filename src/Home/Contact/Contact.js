import React, { useEffect } from 'react';
import './Contact.css'
import { Form } from 'react-bootstrap';
import img from '../../Image/img5.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    return (
        <div id='contact' className='container mt-5 pt-5 contact'>
            <h1 className='heading'>who we are?</h1>
            <div className='row'>
                
                <div data-aos='fade-right' data-aos-duration='1700' className='col-lg-6 col-md-6 col-sm-12'>
                <Form className="w-75 mx-auto my-5 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
    <Form.Label className="text-white">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-white">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
                
  <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
 <br />
  <button className="cardBtn">Submit</button>
</Form>
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1500' className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='w-100' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
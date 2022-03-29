import React, { useEffect } from 'react';
import './ServiceDetails.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = ({ course }) => {
  useEffect(()=> {
    Aos.init({
        once: true,
    })
});

    return (
        <div className='col-lg-3 col-md-4 col-sm-12 g-5'>
            <Card data-aos='zoom-in-up' data-aos-duration='1700' className='card'>
    <Card.Img className='cimg' variant="top" src={course.image} />
    <Card.Body>
            <Card.Title className='specing'>Name: { course.CourseName}</Card.Title>
      <Card.Text className='specing'>
        by : {course.Instructor}
      </Card.Text>
      <Card.Text>
        Price : {course.Price}
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
      <button className='cardBtn'>Enroll</button>
    </Card.Footer>
  </Card>
            
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../Image/img1.jpg'
import img2 from '../../Image/img2.jpg'
import img3 from '../../Image/img3.jpg'




const Banner = () => {
    return (
        <div className='mt-4 pt-3'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className=" image d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>online tech courses to boost your skills</h3>
      <p>Looking to brush up on your tech skills while in quarantine? These 10 free online tech education outlets can help you advance your IT skills</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Earn Your Degree</h3>
      <p>Learn a job-relevant skill that you can use today in under 2 hours through an interactive experience guided by a subject matter expert.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Kickstart Your Career in IT</h3>
      <p>Learn a new tool or skill in an interactive, hands-on environment.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
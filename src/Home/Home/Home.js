import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
           
            <Banner />
            <Service />
            <About />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;
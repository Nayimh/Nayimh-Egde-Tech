import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceDetails from './ServiceDetails/ServiceDetails';
const Service = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(dt => setCourses(dt))
    }, [])

    return (
        <div className='container mt-5 pt-2'>
            <h1 className='heading'>Our Trending Courses  </h1>
            <div className='mt-2 container'>

                <div className='row'>
                    {
                        courses.map(course => <ServiceDetails course={course} key={course.id} />)
                    }
                </div>
                
                </div>
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(dt => setCourses(dt))
    }, [])


    return (
        <div className=' min-h container mt-5 pt-2'>
            <h1 className='heading'>Our All Courses  </h1>
            <div className='mt-2 container'>

                <div className='row'>
                    {
                        courses.map(course => <Course course={course} key={course.id} />)
                    }
                </div>
                
                </div>
        </div>
    );
};

export default Courses;
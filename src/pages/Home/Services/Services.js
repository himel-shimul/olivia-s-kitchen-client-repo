import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('ser.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5'>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-400">Foods</p>
                <h2 className='text-4xl font-thin my-4'>TRENDING RECIPES</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const allServices = useLoaderData();

    return (
        <div className='my-8'>
            <div className='text-center'>
                 <h2 className='text-4xl font-thin my-16'>ALL FOOD SERVICES</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    allServices.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const {_id, title, price, img, description, category} = useLoaderData();
    console.log(title);

    return (
        <div className="card w-full bg-base-100 shadow-xl mb-5">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl'>Price: {price}</p>
    <p className='text-2xl p-4'>Category: {category}</p>
    <p>{description}</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>
    );
};

export default ServiceDetails;
import React from 'react';

const ServiceCard = ({service}) => {

    const {title, price, img, description, category} = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl font-bold'>{category}</p>
    <p>{description.slice(0, 100)}...</p>
    <p className='text-2xl'>Price: ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
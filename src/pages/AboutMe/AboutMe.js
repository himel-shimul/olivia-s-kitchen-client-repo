import React from 'react';
import { Link } from 'react-router-dom';
import chef from '../../assets/chef.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className='w-1/2'>
        <p className='text-2xl  font-bold text-gray-600'>About Me</p>
      <h1 className="text-5xl my-5 font-bold">
        Hello <br /> 
        I am Olivia</h1>
      <p className="py-6">A chef is a person who is professionally trained to cook and experiment with different food to offer a great dining experience for people who come to the restaurant. While we may think that the only role of a chef is to make healthy food, we will understand the extent of his duties through this essay on chefs in English.</p>
      
      <Link to='/blog'><button className="btn btn-warning">Read My Blog</button></Link>
    </div>
    <div className='relative w-1/2'>
        <img src={chef} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
        <img src='{parts}' alt='' className="absolute right-5 top-1/2 w-3/5 border-8 border-white rounded-lg shadow-2xl" />
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;
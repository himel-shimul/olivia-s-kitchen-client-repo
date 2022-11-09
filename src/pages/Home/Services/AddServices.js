import React from 'react';
import { Link } from 'react-router-dom';

const AddServices = () => {

    const handlePlaceReview = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.imageUrl.value;
        const price = form.price.value;
        console.log(img);
    }

    return (
        <div className='w-full '>
            <form onSubmit={handlePlaceReview} className="card-body w-2/3 m-auto">
      <h1 className="text-4xl text-center font-bold">Add Your Service</h1>
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
        <div className="form-control ">
        
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input type="text" name='title' placeholder="title" className="input input-bordered" required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input type="text" name='imageUrl' placeholder="Place your img url" className="input input-bordered" required/>
      </div>
        <div className="form-control ">
        
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input type="text" name='price' placeholder="price" className="input input-bordered" required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input type="text" name='category' placeholder="category" className="input input-bordered" required/>
        
      </div>
      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="your description" required></textarea>        
      </div>
      
        </div>
        <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
      </form>
        </div>
    );
};

export default AddServices;
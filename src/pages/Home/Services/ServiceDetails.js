import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {

  const {user} = useContext(AuthContext);
    const {_id, title, price, img, description, category} = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [refetch, shouldRefetch] = useState(true);

    const handleInputs= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            reviewId: _id,
            reviewName: title,
            price,
            client: name,
            email: user?.email,
            phone,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Thanks for your review')
                form.reset();
                shouldRefetch(!refetch)
            }
        })
        .catch(err => console.error(err))

    }

    // useEffect( () => {
    //   fetch('http://localhost:5000/reviews')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    // }, [])

    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?reviewId=${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [_id, refetch])

    return (
        <>
        <div className="card w-full bg-base-100 shadow-xl mb-5">
  <figure className="px-10 pt-10">
    <div>
      <PhotoProvider>
    <PhotoView src={img}>
      <img src={img} alt="img" style={{ objectFit: 'cover' }} />
      </PhotoView>
      </PhotoProvider>
    </div>
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

      {/* review section */}

    { user?.email ? 
    
      <>
      <div className='w-1/2 items-center ml-3'>
        <h1 className='text-3xl m-4'>Place your review</h1>
    <form onSubmit={handleInputs}>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered input-ghost w-full" required/>
                    <input name='email' defaultValue={user?.email} type="text" placeholder="Last Name" className="input input-bordered input-ghost w-full" readOnly />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-ghost w-full" required />
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="your review" required></textarea>
                    <input className='btn' type="submit" name="" value="submit" />

                </div>
            </form>
    </div>
    <div>
            <div className="overflow-x-auto w-full my-3">
  <table className="table w-full">
    <div className=''>
      {
        reviews.map(review => <div key={review._id} className='w-2/4 py-4 px-4'>
          <div className='flex '>
          <img src={user?.photoURL} className='w-12 rounded' alt="" />
        <p className='text-2xl font-bold ml-4'>{review.client}</p>
          </div>
        <p className='text-1xl ml-14 p-3'>{review.message}</p>
        </div>)
      }
    </div>
    
  </table>
</div>
        </div>
      </>
      : 
      <div className='m-auto py-20'>
        <p className='text-2xl'>Please <Link className='text-sky-400' to='/login'>Login</Link> to review this</p>
      </div>

    }
        </>
    );
};

export default ServiceDetails;
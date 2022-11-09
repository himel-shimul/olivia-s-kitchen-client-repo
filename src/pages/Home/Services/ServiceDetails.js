import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

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
            console.log(data)
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
            console.log(data);
            setReviews(data)
        })
    }, [_id, refetch])

    return (
        <>
        <div className="card w-full bg-base-100 shadow-xl mb-5">
  <figure className="px-10 pt-10">
    <img src={img} alt="img" className="" />
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
    <div className='w-1/2 items-center'>
    <form onSubmit={handleInputs}>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered input-ghost w-full" />
                    <input name='email' defaultValue={user?.email} type="text" placeholder="Last Name" className="input input-bordered input-ghost w-full" readOnly />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-ghost w-full" required />
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="your review" required></textarea>
                    <input className='btn' type="submit" name="" value="submit" />

                </div>
            </form>
    </div>
    <div>
            <h2>Your have {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <div>
      {/* {
        reviews.map(review => <ReviewRow
        key={review._id}
        review={review}
        ></ReviewRow>)
      } */}
      {
        reviews.map(review => <div key={review._id} className='w-2/4 py-4'>
        <p className='text-2xl font-bold'>{review.client}</p>
        <p className='text-1xl font-bold text-center'>{review.message}</p>
        </div>)
      }
    </div>
    
  </table>
</div>
        </div>
        </>
    );
};

export default ServiceDetails;
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = ({id}) => {
    const {user} = useContext(AuthContext);
    const {reviewId} = useLoaderData();
    console.log(reviewId);
    const [reviews, setReviews] = useState([]);

    // useEffect( () => {
    //   fetch('http://localhost:5000/reviews')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    // }, [])

    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?reviewId=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data)
        })
    }, [id])
    return (
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
    );
};

export default Reviews;
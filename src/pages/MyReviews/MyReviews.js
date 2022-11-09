import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const allReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data);
        })
    }, [user?.email])

    const handleDelete = id =>{
        const success = window.confirm('Are you sure you want to delete?');
        if(success){
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert('deleted successfully');
                    const exist = reviews.filter(rev => rev._id !== id);
                    setReviews(exist)
                }
            })

        }
    }

    return (
        <div className="overflow-x-auto w-full">
  {
    reviews.length > 0 ? <table className="table w-full">
    {/* <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead> */}
    <tbody>
      
        {
            reviews.map(review => <tr>

                <div className='flex justify-between p-8'>
                <button onClick={() => handleDelete(review._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                    <p className='text-xl font-semibold'>{review.client}</p>
                    <p className='p-2'>{review.reviewName}</p>
                    <p className='text-1xl px-4'>{review.message}</p>
                    <button className="btn btn-outline btn-warning rounded">Edit</button>
                </div>

            </tr>)
        }
    </tbody>
    
  </table> : <p className='text-3xl bold text-center py-56'>No reviews found!</p>
  }
</div>
    );
};

export default MyReviews;
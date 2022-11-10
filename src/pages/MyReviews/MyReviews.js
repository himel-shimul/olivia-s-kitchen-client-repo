import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../Hooks/useSetTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const allReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useSetTitle('MyReviews');
    console.log(reviews);

    useEffect( () =>{
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
            headers: {
                authorization: ` Bearer ${localStorage.getItem('token')}`
            }
        })
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
            .then(res =>{
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                if(data.deletedCount  > 0){
                    
                    toast("Delete Successfully");
                    const exist = reviews.filter(rev => rev._id !== id);
                    setReviews(exist)
                }
            })

        }
    }
    const handleMessage = (event, id) =>{
        console.log(id);
        event.preventDefault()
        const form = event.target;
        const message = form.message.value;
        console.log(message);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({message: message})
        })
    
    }
    
    return (
        <div className="overflow-x-auto w-full my-20">
  {
    reviews.length > 0 ? <table className="table w-full">
    <tbody>
      
        {
            reviews.map(review => <tr>

                <div className='flex justify-between p-8'>
                <button onClick={() => handleDelete(review._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    <ToastContainer />
                </button>
                    <p className='text-xl font-semibold'>{review.client}</p>
                    <p className='p-2'>{review.reviewName}</p>
                    <p className='text-1xl px-4'>{review.message}</p>
                    <form onSubmit={(e) =>handleMessage(e, review._id)}>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className="btn">edit</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box relative">
                        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="font-bold text-lg py-3">update your Message</h3>
                            <input  type="text" name='message' placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                            <div className="modal-action">
                            <button type='submit' className='btn btn-outline'>Submit</button>
                            </div>
                        </div>
                        </div>
                    </form>
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
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewPage = ({id, title, price }) => {
    const {user} = useContext(AuthContext);

    const handleInputs= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            reviewId: id,
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
                'content-type': 'application/json',

            },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Thanks for your review')
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }

    return (
        <div>
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
    );
};

export default ReviewPage;
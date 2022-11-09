import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SIgnUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }


    return (
        <div className="hero my-8">
  <div className="hero-content w-2/4">
    <div className="card flex-shrink-0 w-full pb-3 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-4xl text-center font-bold">Signup</h1>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="your name" className="input input-bordered" />
        </div>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Signup" />
          

        </div>
      </form>
      <p className='text-center '>Already have an account? <Link className='text-orange-400' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SIgnUp;
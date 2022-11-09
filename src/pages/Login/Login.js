import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

  const {login} = useContext(AuthContext);

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result =>{
          const user = result.user;
          console.log(user);
        })
        .then(err =>console.error(err))
    }

    return (
        <div className="hero my-8">
  <div className="hero-content w-2/4">
    <div className="card flex-shrink-0 w-full pb-3 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
      <h1 className="text-4xl text-center font-bold">Login</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary mb-8" type="submit" value="Login" />
          
      <p className='text-center '>Don't have an account yet? <Link className='text-orange-400' to='/signup'>Signup</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-error">Google</button>

        </div>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;
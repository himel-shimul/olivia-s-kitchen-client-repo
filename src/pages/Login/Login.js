import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const {login, googleLogIn, user, setLoading} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  
  const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
      googleLogIn(googleProvider)
      .then(result =>{
        const user = result.user;

      })
      .catch(err =>{
        console.error(err);
        
      })
    }

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result =>{
          const user = result.user;
          console.log(user);
          form.reset();
          navigate(from, {replace: true});
        })
        .catch(err =>{
          setError(err.message);
        })
        .finally(() =>{
          setLoading(false);
        })
    }
    if(user){
      return <Navigate to={from} state={{from: location}} replace></Navigate>
  }
    return (
        <div className="hero my-8">
  <div className="hero-content w-2/4">
    <div className="card flex-shrink-0 w-full pb-5 max-w-sm shadow-2xl bg-base-100">
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
         <p>{error}</p> 
      <p className='text-center '>Don't have an account yet? <Link className='text-orange-400' to='/signup'>Signup</Link></p>
      
        </div>
      </form>
      <div className='text-center'>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-error w-1/3">Google</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
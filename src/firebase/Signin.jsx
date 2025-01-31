import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const { signinuser , signinwithgoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const [errormessage, setErrormessage] = useState('');

  const handlesignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrormessage(''); // Clear previous errors

    signinuser(email, password)
      .then((result) => {
        e.target.reset(); // Reset form
        navigate('/'); // Navigate to home
      })
      .catch((error) => {
        setErrormessage(error.message); // Display error message
      });
  };
  const handlegoogle = () =>{
    signinwithgoogle()
    .then(result =>{
      console.log(result.user)
      navigate('/')
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Sign in now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handlesignin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showpassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowpassword(!showpassword)}
                className="btn-xs absolute right-6 top-12"
              >
                {showpassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>

          <p className="text-center mt-4">
            New to this website? Please{' '}
            <span className="text-blue-600">
              <Link to="/signup">Register</Link>
            </span>
          </p>

          {errormessage && <p className="text-red-600 text-center mt-2">{errormessage}</p>}
          <p className='btn' onClick={handlegoogle}>  sign up with google</p>
        </div>
      

      </div>
    </div>
  );
};

export default Signin;

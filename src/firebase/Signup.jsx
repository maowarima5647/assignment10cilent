import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const { creatuser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage('');
        setSuccess(false);

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters long.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must include at least one uppercase, one lowercase, one number, and one special character.');
            return;
        }








        
        auth.currentUser.updateProfile({
            displayName: name,
            photoURL: photo,  // এখানে photoURL আসছে কিনা চেক করুন
        }).then(() => {
            // Success block
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    setSuccess(true);
                    e.target.reset();
                    navigate('/');
                })
                .catch((error) => {
                    setErrorMessage('Error sending email verification: ' + error.message);
                });
        }).catch((error) => {
            setErrorMessage('Error updating profile: ' + error.message);
        });
        











    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn-xs absolute right-6 top-12">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
                        {success && <p className="text-green-600 mt-2">Successfully created user!</p>}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
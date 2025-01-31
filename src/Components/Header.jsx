import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/Authprovider';
import UpcomingGames from './Upcominggames';

const Header = () => {
 const {user ,  logout} = useContext(AuthContext)
   

const commonLinks = (
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allreview">All review</NavLink></li>
    </>
);

// Define links that are visible only to authenticated users
const authLinks = (
    <>
        <li><NavLink to="/addreview">Add Review</NavLink></li>
        <li><NavLink to="/myreviews">My Review</NavLink></li>
        <li><NavLink to="/gamewishlist">Game WatchList</NavLink></li>
    </>
);






    return (


<div className='w-10/12 mx-auto'>

        <div className="navbar bg-base-100 w-10/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {commonLinks}
                        {user && user?.email && authLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl "> <span className='white -mr-1'>GO</span><span className=' text-orange-600 mr-7'>Online</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {commonLinks}
                {user && user?.email && authLinks}
                </ul>
            </div>
            <div className="navbar-end list-none mx-3">
               
            <li className='mx-3  bg-white text-black border px-5 py-3 rounded-3xl '><NavLink to="signin" >Login</NavLink></li>

            {
                user && user?.email? <button onClick= { logout} className='text-orange-600 text-2xl'>Logout</button> : <li className='bg-orange-600 px-7 py-3 rounded-3xl text-1xl'><NavLink to="signup">Register</NavLink></li>
            }
           


            </div>

            </div>
{/*extra section */}







        </div>
    );
};

export default Header;

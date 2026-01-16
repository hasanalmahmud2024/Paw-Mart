import React, { useContext, useEffect, useState } from 'react';
import { FaShieldDog } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const [isLight, setIsLight] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'light' : true;
    });
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isLight ? 'light' : 'dark'
        );
        // Save the current theme to localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);

    const handleTheme = () => {
        setIsLight(prev => !prev);
    };

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Signed Out")
                // console.log('Signed out');
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message);
            })
    }

    const linkStyle = ({ isActive }) => isActive ? 'border-b-2 shadow-2xl rounded-none' : "";
    const links = <>
        <li><NavLink className={linkStyle} to={'/'}>Home</NavLink></li>
        <li><NavLink className={linkStyle} to={'/pets-supplies'}>Pets & Supplies</NavLink></li>
        <li><NavLink className={linkStyle} to={'/profile'}>My Profile</NavLink></li>
        {user && (
            <>
                <li><NavLink className={linkStyle} to={'/add-listings'}>Add Listing</NavLink></li>
                <li><NavLink className={linkStyle} to={'/my-listings'}>My Listings</NavLink></li>
                <li><NavLink className={linkStyle} to={'/my-orders'}>My Orders</NavLink></li>
            </>
        )}
    </>

    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-xs lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-3 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-xs md:btn-lg btn-ghost md:text-xl text-lg font-mono"><img src="/golden-retriever.png" className="md:w-10 w-8" alt="warm paws icon" /> PawMart </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onClick={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
                {user ? (
                    <div className="flex items-center gap-4">
                        <Link to={'/profile'} className="relative group cursor-pointer">
                            <img
                                src={user?.photoURL || "https://imgs.search.brave.com/CyAW1TV_1bpb3aJjutbaoji2RjmSM6pn2sNL1R6n7e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/Mi8xOC8xMS8wMC9p/Y29uLTc3OTc3MDRf/NjQwLnBuZw"}
                                className="w-10 h-10 rounded-full object-cover border hover:border-2"
                            />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-5 py-1 rounded bg-neutral text-white text-sm opacity-0 group-hover:opacity-100 transition z-50">
                                {user?.displayName || "User"}
                            </span>
                        </Link>

                        <button onClick={handleSignOut} className="btn hidden md:block">
                            Logout
                        </button>
                    </div>)
                    : <Link className='btn' to={'/login'}>Log In</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;
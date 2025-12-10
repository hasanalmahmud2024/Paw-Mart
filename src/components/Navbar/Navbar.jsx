import React, { use } from 'react';
import { FaShieldDog } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Signed Out")
                console.log('Signed out');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/profile'}>My Profile</NavLink></li>
        <li><NavLink to={'/add-services'}>Add Services</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-3 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl font-mono"><img src="/golden-retriever.png" className="w-10" alt="warm paws icon" /> PAWMART </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
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
                        <button onClick={handleSignOut} className="btn">
                            Logout
                        </button>
                    </div>)
                    : <Link className='btn' to={'/login'}>Log In</Link>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;
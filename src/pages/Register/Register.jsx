import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const password = event.target.password.value;

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
        if (!passwordPattern.test(password)) {
            toast.error("Password must have uppercase, lowercase, number, and be at least 6 chars.");
            return;
        }
        if (!name.trim()) {
            toast.error("Please enter your name");
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser(result.user);
                }).catch((error) => {
                    toast.error(error.message);
                });

                toast.success('Account created successfully');
                setTimeout(() => {
                    navigate(location?.state?.from || '/');
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Account created successfully');
                setTimeout(() => {
                    navigate(location?.state?.from || '/');
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-md rounded-xl bg-base-100 p-8 shadow-2xl">
                <h1 className="text-4xl font-bold text-center mb-2 text-neutral">Create Account</h1>
                <p className="text-center text-sm text-gray-500 mb-6">Join PawMart today!</p>

                <form onSubmit={handleSignUp} className="space-y-5">
                    {/* Name */}
                    <div className="form-control">
                        <label htmlFor="name" className="label-text text-sm font-medium">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label htmlFor="email" className="label-text text-sm font-medium">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label htmlFor="photoURL" className="label-text text-sm font-medium">Photo URL (optional)</label>
                        <input
                            id="photoURL"
                            name="photoURL"
                            type="text"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label htmlFor="password" className="label-text text-sm font-medium">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="input input-bordered w-full pr-16"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="btn btn-ghost btn-sm absolute right-2 top-1/2 -translate-y-1/2"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Register Button */}
                    <button type="submit" className="btn btn-neutral hover:scale-102 hover:shadow-lg w-full mt-4">
                        Register
                    </button>

                    {/* Google Sign-Up */}
                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="btn btn-outline hover:scale-104 hover:shadow-lg w-full flex items-center justify-center gap-2">
                        <FcGoogle />
                        Sign Up with Google
                    </button>

                    <p className="text-center text-sm mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:text-blue-600">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;   
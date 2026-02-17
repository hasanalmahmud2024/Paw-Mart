import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(() => {
                event.target.reset();
                toast.success('Login successful');
                setTimeout(() => {
                    navigate(location?.state?.from || '/');
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.message || 'Login failed');
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Login successful');
                setTimeout(() => {
                    navigate(location?.state?.from || '/');
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.message || 'Google sign-in failed');
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <Toaster position="top-center" />
            <title>PawMart | Login</title>

            <div className="w-full max-w-md space-y-8 rounded-xl bg-base-100 p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold ">Welcome Back!</h1>
                    <p className="mt-2 text-sm text-gray-500">Sign in to continue to PawMart</p>
                </div>

                <form onSubmit={handleLogIn} className="mt-6 space-y-6">
                    {/* Email Field */}
                    <div className="form-control">
                        <label htmlFor="email" className="label-text text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-primary/30"
                            placeholder="you@example.com"
                            aria-required="true"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control">
                        <label htmlFor="password" className="label-text text-sm font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="input input-bordered w-full pr-16 focus:ring-2 focus:ring-primary/30"
                                placeholder="••••••••"
                                aria-required="true"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="btn btn-ghost btn-sm absolute right-2 top-1/2 -translate-y-1/2 px-3 text-gray-500 hover:text-gray-700"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                            </button>
                        </div>
                        <label className="label mt-1">
                            <Link
                                to="/reset-password"
                                className="label-text-alt link link-hover text-sm text-blue-500 hover:text-blue-600"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn btn-neutral hover:scale-102 hover:shadow-lg w-full rounded-lg py-3 font-semibold transition-all duration-150"
                    >
                        Log In
                    </button>

                    {/* Google Sign-In */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline hover:scale-104 hover:shadow-lg w-full flex items-center justify-center gap-2">
                        <FcGoogle size={20} /> <span>Log in with Google</span>
                    </button>
                </form>

                {/* Sign-Up Link */}
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-blue-500 hover:text-blue-600">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;   
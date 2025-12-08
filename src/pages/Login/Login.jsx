import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser, signInWithGoogle, } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(() => {
                event.target.reset();
                toast.success('Login successful');
                setTimeout(() => {
                    navigate(location?.state || '/');
                }, 1000);
            })
            .catch((error => {
                console.log(error);
                toast.error(error.message);
            }))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Login successful');
                setTimeout(() => {
                    navigate(location?.state || '/');
                }, 1000);
            })
            .catch((error => {
                console.log(error);
                toast.error(error.message);
            }))
    }

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero bg-base-200 py-10">
            <title>WARM PAWS | Login</title>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left mb-2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full mx-14 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <button onClick={handleShowPassword} className="btn btn-xs absolute top-2 right-5 z-1">
                                        {
                                            showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>
                                        }
                                    </button>
                                    <input name='password' type={showPassword ? 'text' : "password"} className="input pr-10" placeholder="Password" required />
                                </div>
                                <div><Link to={'/reset-password'} className="text-sm link link-hover text-blue-400 hover:text-blue-300">Forgot password?</Link></div>

                                <button className="btn btn-neutral mt-4">Login</button>
                                <button onClick={handleGoogleSignIn} className="btn bg-white text-black my-1">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <p className='text-sm'>Don't have an account? <Link to={'/register'} className='link link-hover text-blue-500 hover:text-blue-400'>Create Now</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;
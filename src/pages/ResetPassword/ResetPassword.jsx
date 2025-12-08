import React, { use, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router';

const ResetPassword = () => {
    const { sendResetEmail } = use(AuthContext);
    const emailRef = useRef();

    const handleReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        sendResetEmail(email)
        .then(()=>{
            setTimeout(() => {
                toast.success("Reset link sent! Check your mail.")
                
            }, 1500);
        })
        .catch((error)=>{
            console.log(error);
            toast.error(error.message);
        })
    }

    return (
        <div className='min-h-[60vh] grid justify-center items-center py-12 px-8'>
            <div className="max-w-md mx-auto p-10 shadow-lg bg-neutral-300 rounded-lg mb-8">
                <h2 className="text-3xl font-black mb-10 text-center text-black">Reset Password</h2>

                <label className="label">
                    <span className="label-text font-bold text-black">Enter Your Email</span>
                </label>

                <input
                    type="email"
                    ref={emailRef}
                    placeholder="your@email.com"
                    className="input input-bordered w-full mb-5 mt-1 shadow-2xl"
                />

                <button onClick={handleReset} className="btn btn-primary w-full shadow-2xl">
                    Send Reset Email
                </button>
            </div>
            <div className='text-center '>
                <Link to={'/login'} className='btn btn-ghost btn-soft text-white w-full'>Back to Login</Link>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ResetPassword;
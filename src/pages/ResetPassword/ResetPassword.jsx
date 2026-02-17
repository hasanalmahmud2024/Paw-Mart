import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    const { sendResetEmail } = useContext(AuthContext);
    const emailRef = useRef();

    const handleReset = async (e) => {
        e.preventDefault();
        const email = emailRef.current?.value?.trim();
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        setLoading(true);
        try {
            await sendResetEmail(email);
            toast.success("Password reset link sent! Check your inbox.");
            emailRef.current.value = ""; // Clear input
        } catch (error) {
            const message = error.code === 'auth/user-not-found'
                ? "No account found with this email."
                : error.message || "Failed to send reset email. Please try again.";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[60vh] grid justify-center items-center py-12 px-8">
            <title>PawMart | Reset Password</title>
            <form
                onSubmit={handleReset}
                className="max-w-md mx-auto p-10 shadow-lg bg-neutral-100 rounded-lg mb-8"
            >
                <h2 className="text-3xl font-black mb-10 text-center text-black">Reset Password</h2>

                <label className="label">
                    <span className="label-text font-bold text-black">Enter Your Email</span>
                </label>

                <input
                    type="email"
                    ref={emailRef}
                    placeholder="your@email.com"
                    className="input input-bordered w-full mb-5 mt-1 shadow-2xl"
                    required
                    aria-invalid={false}
                    disabled={loading}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`btn w-full shadow-xl hover:scale-102 ${loading ? 'btn-disabled' : 'btn-neutral'}`}
                >
                    {loading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        "Send Reset Email"
                    )}
                </button>
            </form>

            <div className="text-center">
                <Link to="/login" className="btn btn-outline btn-neutral hover:scale-102 w-full">
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default ResetPassword;
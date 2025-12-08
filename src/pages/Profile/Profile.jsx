import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { user, setUser } = use(AuthContext);

    const handleOpenForm = () => {
        setIsFormOpen(!isFormOpen);
    }
    const handleUpdate = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;


        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
        }).then(() => {
            setUser(auth.currentUser);
            toast.success('Profile Updated');
            setIsFormOpen(!isFormOpen);

        }).catch(error => {
            console.log(error);
            toast.error(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <title>WARM PAWS | My Profile</title>
            <div className="hero-content flex-col text-center ">
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        <img src={user?.photoURL || "https://imgs.search.brave.com/CyAW1TV_1bpb3aJjutbaoji2RjmSM6pn2sNL1R6n7e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/Mi8xOC8xMS8wMC9p/Y29uLTc3OTc3MDRf/NjQwLnBuZw"} />
                    </div>
                </div>
                <div>
                    <h4 className="text-5xl font-bold">{user?.displayName || "User"}</h4>
                    <p className="py-6">{user?.email}</p>

                </div>
                {
                    isFormOpen ?
                        (<form onSubmit={handleUpdate} className='w-64'>
                            <fieldset className="fieldset">
                                <label className="label">Your Name</label>
                                <input name='name' defaultValue={user?.displayName} type="text" className="input" required placeholder="Your Name" />
                                {/* photoURL */}
                                <label className="label">Your Photo </label>
                                <input name='photoURL' defaultValue={user?.photoURL} type="text" className="input" placeholder="PhotoURL" />

                                <button className="btn btn-primary mt-4">Update</button>
                            </fieldset>
                        </form>) : 
                        <button onClick={handleOpenForm} className="btn btn-primary">Update Profile</button>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Profile;
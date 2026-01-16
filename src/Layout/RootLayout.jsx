import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20 bg-base-100"></div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default RootLayout;
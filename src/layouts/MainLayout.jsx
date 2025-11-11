import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../pages/home/Banner';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
        <nav className='container mx-auto px-4'><Navbar></Navbar></nav>

       <main className="flex-grow container mx-auto px-4 py-6"><Outlet>
       
        </Outlet></main>

       <Footer></Footer>
        </div>
    );
};

export default MainLayout;
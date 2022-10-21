import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
    return (
        <div className='min-w-[768px] max-w-[1440px] mx-auto w-screen h-screen flex bg-[#FAFAFA] overflow-x-hidden'>

            <Sidebar />

            <main className='w-full h-full'>

                <Outlet />

            </main>
        </div >
    )
}

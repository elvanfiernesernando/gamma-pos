import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
    return (
        <div className='min-w-[1336px] w-screen h-screen flex bg-[#FAFAFA]'>

            <Sidebar />

            <main>

                <Outlet />

            </main>
        </div >
    )
}

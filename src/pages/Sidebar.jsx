import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb, HiOutlineShoppingBag, HiOutlineCog, HiOutlineArchive, HiOutlineHeart, HiOutlineLogout } from 'react-icons/hi'

export default function Sidebar() {
    return (
        <div className='min-w-[1336px] w-screen h-screen flex bg-[#FAFAFA]'>
            <aside className='h-screen w-[240px] bg-white px-8 py-10 flex flex-col justify-between gap-12 shadow-lg'>


                <div className='flex justify-start items-center gap-4 font-semibold'>
                    <div className='p-2 bg-[#1D03BD] rounded-full'>
                        <HiOutlineLightBulb className='text-2xl text-white' />
                    </div>
                    <h1 className='text-[#1D03BD] text-xl select-none'>Gamma-POS</h1>
                </div>

                <menu className='flex-1'>
                    <nav className='flex flex-col gap-10'>

                        <Link to={"/menu"} className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#1D03BD] hover:text-white rounded-lg" >
                            <HiOutlineShoppingBag className='text-2xl text-slate-500 group-hover:text-white' />
                            <h2 className='text-slate-800 group-hover:text-white'>
                                Menu
                            </h2>
                        </Link>

                        <Link to={"/menu"} className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#1D03BD] hover:text-white rounded-lg" >
                            <HiOutlineHeart className='text-2xl text-slate-500 group-hover:text-white' />
                            <h2 className='text-slate-800 group-hover:text-white'>
                                Favourite
                            </h2>
                        </Link>

                        <Link to={"/menu"} className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#1D03BD] hover:text-white rounded-lg" >
                            <HiOutlineArchive className='text-2xl text-slate-500 group-hover:text-white' />
                            <h2 className='text-slate-800 group-hover:text-white'>
                                Management
                            </h2>
                        </Link>

                        <Link to={"/menu"} className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#1D03BD] hover:text-white rounded-lg" >
                            <HiOutlineCog className='text-2xl text-slate-500 group-hover:text-white' />
                            <h2 className='text-slate-800 group-hover:text-white'>
                                Settings
                            </h2>
                        </Link>

                    </nav>
                </menu>

                <Link to={"/menu"} className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#1D03BD] hover:text-white rounded-lg" >
                    <HiOutlineLogout className='text-2xl text-slate-500 group-hover:text-white' />
                    <h2 className='text-slate-800 group-hover:text-white'>
                        Logout
                    </h2>
                </Link>

            </aside>
















            <main>

                <h1>Ini konten</h1>

            </main>
        </div>
    )
}

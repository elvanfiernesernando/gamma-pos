import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineLightBulb, HiOutlineShoppingBag, HiOutlineCog, HiOutlineArchive, HiOutlineLogout, HiOutlineCollection } from 'react-icons/hi'

export default function Sidebar() {


    const navActive = "flex justify-start items-center p-4 gap-4 text-md group bg-[#1D03BD] rounded-lg";
    const navIconActive = "text-2xl text-white"
    const navH2Active = "text-white"

    const navNormal = "flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#9f9cb6] rounded-lg";
    const navIconNormal = "text-2xl text-slate-500 group-hover:text-white"
    const navH2Normal = "text-slate-800 group-hover:text-white"



    return (
        <aside className='h-screen w-[280px] bg-white px-8 py-10 flex flex-col justify-between gap-12 shadow-lg active'>

            {/* Logo / Brands */}
            <div className='flex justify-start items-center gap-4 font-semibold'>
                <div className='p-2 bg-[#1D03BD] rounded-full'>
                    <HiOutlineLightBulb className='text-2xl text-white' />
                </div>
                <h1 className='text-[#1D03BD] text-md select-none'>Gamma-POS</h1>
            </div>

            {/* Nav Menu */}
            <menu className='flex-1'>
                <nav className='flex flex-col gap-6 2xl:gap-10'>

                    {/* Menu */}
                    <NavLink to={"/"} end className={({ isActive }) => isActive ? navActive : navNormal}
                        children={({ isActive }) => {

                            const iconClass = isActive ? navIconActive : navIconNormal;
                            const h2Class = isActive ? navH2Active : navH2Normal;

                            return (
                                <>
                                    <HiOutlineShoppingBag className={iconClass} />
                                    <h2 className={h2Class}>
                                        Menu
                                    </h2>
                                </>
                            )
                        }}
                    >
                    </NavLink>

                    {/* History */}
                    <NavLink to={"/history"} end className={({ isActive }) => isActive ? navActive : navNormal}
                        children={({ isActive }) => {

                            const iconClass = isActive ? navIconActive : navIconNormal;
                            const h2Class = isActive ? navH2Active : navH2Normal;

                            return (
                                <>
                                    <HiOutlineCollection className={iconClass} />
                                    <h2 className={h2Class}>
                                        History
                                    </h2>
                                </>
                            )
                        }}
                    >
                    </NavLink>

                    {/* Inventory */}
                    <NavLink to={"/inventory"} className={({ isActive }) => isActive ? navActive : navNormal}
                        children={({ isActive }) => {

                            const iconClass = isActive ? navIconActive : navIconNormal;
                            const h2Class = isActive ? navH2Active : navH2Normal;

                            return (
                                <>
                                    <HiOutlineArchive className={iconClass} />
                                    <h2 className={h2Class}>
                                        Inventory
                                    </h2>
                                </>
                            )
                        }}
                    >
                    </NavLink>

                    {/* Settings */}
                    <NavLink to={"/settings"} className={({ isActive }) => isActive ? navActive : navNormal}
                        children={({ isActive }) => {

                            const iconClass = isActive ? navIconActive : navIconNormal;
                            const h2Class = isActive ? navH2Active : navH2Normal;

                            return (
                                <>
                                    <HiOutlineCog className={iconClass} />
                                    <h2 className={h2Class}>
                                        Settings
                                    </h2>
                                </>
                            )
                        }}
                    >
                    </NavLink>

                </nav>
            </menu>

            {/* Logout Button */}
            <button className="flex justify-start items-center p-4 gap-4 text-md group hover:bg-[#9f9cb6] rounded-lg" >
                <HiOutlineLogout className='text-2xl text-slate-500 group-hover:text-white' />
                <h2 className='text-slate-800 group-hover:text-white'>
                    Logout
                </h2>
            </button>

        </aside>
    )
}

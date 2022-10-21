import React from 'react';
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'

export default function Menu() {
    return (
        <div className='w-full h-full flex'>
            {/* Left content */}
            <div className='w-[800px] flex-1 flex flex-col p-10 gap-8'>

                {/* Search Panel */}
                <div className='w-full h-12 flex justify-between items-center gap-4'>
                    <div className='flex justify-start w-full'>
                        <label htmlFor="searchMenu" className="text-2xl text-slate-500 bg-white p-4 rounded-l-lg" >
                            <HiOutlineSearch />
                        </label>

                        <input type="text" placeholder='Search menu' id='searchMenu' className='rounded-r-lg flex-1 outline-none' />
                    </div>
                    <div className='bg-white p-4 rounded-lg'>
                        <HiOutlineBell className='text-2xl' />
                    </div>
                </div>

                {/* Category */}
                <div className='w-full overflow-x-auto scrollbar flex items-center gap-4 pb-4'>
                    <button className='px-8 py-4 bg-white rounded-lg border-solid border-2 border-[#1D03BD]'>All</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Makanan</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Minuman</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Sayuran</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Snack</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Coofee</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Cookies</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Bread</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Snack</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Coofee</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Cookies</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Bread</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Snack</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Coofee</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Cookies</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Bread</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Snack</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Coofee</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Cookies</button>
                    <button className='px-8 py-4 bg-white rounded-lg hover:border-2'>Bread</button>
                </div>

                {/* Product Panel */}
                <div className='flex-1 overflow-y-auto grid grid-cols-4 gap-4  overflow-x-hidden scrollbar'>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>

                    <article className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                        <img src="https://via.placeholder.com/132" className='rounded-full' width={"132px"} height={"132px"} />
                        <h3 className='font-semibold text-[#1D03BD]'>Cornetto Pizza</h3>
                        <p>Rp. 19.900</p>
                        <button className='w-full py-2 mt-2 bg-[#1D03BD] text-white rounded-lg'>Add to Cart</button>
                    </article>


                </div>

            </div>


            {/* Right content */}
            <div className='w-[280px] bg-red-500 flex'></div>

        </div>
    )
}

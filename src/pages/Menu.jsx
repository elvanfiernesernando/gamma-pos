import React from 'react';
import { HiOutlineBell, HiOutlineSearch, HiOutlinePencilAlt, HiOutlinePlus, HiOutlineMinus, HiOutlineClipboardList } from 'react-icons/hi'

export default function Menu() {
    return (
        <div className='w-full h-full flex'>
            {/* Left content */}
            <div className='w-[800px] flex-1 flex flex-col px-10 pt-10 gap-8'>

                {/* Search Panel */}
                <div className='w-full h-12 flex justify-between items-center gap-4'>
                    <div className='flex justify-start w-full'>
                        <label htmlFor="searchMenu" className="text-2xl text-slate-500 bg-white p-4 rounded-l-lg" >
                            <HiOutlineSearch />
                        </label>

                        <input type="text" placeholder='Search menu' id='searchMenu' className='rounded-r-lg flex-1 outline-none' />
                    </div>
                    <div className='bg-white p-4 rounded-lg'>
                        <HiOutlineBell className='text-2xl text-slate-500' />
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
                <div className='flex-1 overflow-y-auto grid grid-cols-4 gap-4  overflow-x-hidden scrollbar pb-8'>

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
            <div className='w-[350px] flex flex-col pr-10 py-10 gap-4'>

                <div className='flex justify-between items-center h-12 bg-white shadow-lg gap-4 rounded-lg'>
                    {/* <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" /> */}
                    <h3 className='text-slate-700 pl-4 w-full font-semibold'>New Customer</h3>
                    <button className='h-full p-4'>
                        <HiOutlinePencilAlt className='text-xl text-slate-500' />
                    </button>
                </div>

                <div className='flex flex-col justify-between p-4 bg-white shadow-lg gap-4 h-full rounded-lg'>

                    {/* Title */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-700 font-semibold'>Current Order</h2>
                        <hr />
                    </div>


                    {/* Current order */}
                    <div className='flex flex-col gap-4 overflow-y-auto scrollbar max-h-[285px] 2xl:max-h-[570px]'>



                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>

                        <article className='flex justify-between items-center'>
                            <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                            <div className='flex flex-col justify-center flex-1 px-4'>
                                <h3 className=' text-[#1D03BD] font-semibold text-sm'>Cornetto Pizza Terakhir</h3>
                                <p className=' text-slate-500 text-sm'>Rp. 19.900 Terakhir</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button>
                                    <HiOutlineMinus className='text-sm' />
                                </button>
                                <p className='border border-solid border-slate-500 w-8 text-center'>1</p>
                                <button>
                                    <HiOutlinePlus className='text-sm' />
                                </button>
                            </div>
                        </article>



                    </div>


                    {/* Footer order */}
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-slate-400'>Sub Total</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. 19.900,-</p>
                        </div>
                        <div className='flex justify-between items-center pt-2'>
                            <h3 className='text-slate-400'>Discount</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. 5000,-</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center pb-2'>
                            <h3 className='text-slate-400 pt-2'>Total</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. 14.900,-</p>
                        </div>
                        <div className='w-full flex items-center justify-between gap-2'>
                            <button className='border border-solid border-[#1D03BD] rounded-lg p-2 shadow-lg'>
                                <HiOutlineClipboardList className='text-2xl text-slate-500' />
                            </button>
                            <button className='bg-[#1D03BD] p-2 text-white flex-1 rounded-lg'>Charge Rp. 14.900,-</button>
                        </div>
                    </div>

                </div>




            </div>

        </div >
    )
}

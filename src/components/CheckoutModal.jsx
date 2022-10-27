import React from 'react'

export default function CheckoutModal() {
    return (

        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center backdrop-brightness-50 backdrop-blur-sm'>

            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Payment Confirmation</h2>
                    <hr />
                </div>

                {/* changes display */}
                <div className='flex flex-col'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center'>Changes</h2>
                    <h2 className='text-center uppercase text-2xl font-semibold text-gray-700 bg-green-200 border border-green-500 flex-1 p-2 my-6 rounded-md'>24.000</h2>
                </div>

                {/* form confirm */}
                <form>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center w-24'>
                            <h2 className='font-semibold text-slate-700 p-2'>Total</h2>
                            <h2 className='font-semibold text-slate-700 p-2'>:</h2>
                        </div>
                        <h2 className='uppercase text-xl font-semibold text-slate-700 flex-1 text-end pr-2'>22.000</h2>
                    </div>

                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex justify-between items-center w-24'>
                            <h2 className='font-semibold text-slate-700 p-2'>Payment</h2>
                            <h2 className='font-semibold text-slate-700 p-2'>:</h2>
                        </div>
                        <input type={"number"} className='w-40 uppercase text-xl font-semibold text-slate-700 text-end border focus:border-[#190983] outline-none px-2' autoFocus />
                    </div>

                    <button className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none'>Confirm Payment</button>
                </form>

            </div>
        </div>

    )
}

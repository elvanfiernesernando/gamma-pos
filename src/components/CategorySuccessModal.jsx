import React, { useContext, useEffect, useState } from 'react';
import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/successAnimation.json";
import { HiOutlineX } from "react-icons/hi";
import { CategoryContext } from '../stores/InventoryProvider';

export default function CategorySuccessModal() {

    // context
    const [showCategoryModal, setShowCategoryModal] = useContext(CategoryContext);

    // state
    const [countDownTimer, setCountDownTimer] = useState(5);

    // component did mount
    useEffect(() => {
        setTimeout(() => {
            setShowCategoryModal({
                ...showCategoryModal,
                categorySuccessModal: false
            })
        }, 5000)
    }, [])

    // set interval
    setInterval(() => {
        setCountDownTimer(countDownTimer - 1)
    }, 1000)

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* category success modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6 relative'>

                {/* modal header */}
                <div className='w-full flex flex-col items-center'>
                    <div className='bg-green-200 flex justify-center items-center h-20 w-20 rounded-full m-auto mb-3'>
                        <Lottie animationData={successAnimation} loop={true} />
                    </div>
                    <div>
                        <p className='text-xl text-green-500 font-semibold'>Success</p>
                    </div>
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowCategoryModal({
                            ...showCategoryModal,
                            categorySuccessModal: false
                        })
                    }} />
                </div>

                {/* close modal */}
                <form>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500' onClick={() => {
                        setShowCategoryModal({
                            ...showCategoryModal,
                            categorySuccessModal: false
                        })
                    }}>Close</button>

                    <h3 className='text-slate-400 pt-2 text-center text-sm'>Automatically close in {countDownTimer}</h3>

                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categorySuccessModal: false
                })
            }}></div>
        </div >
    )
}

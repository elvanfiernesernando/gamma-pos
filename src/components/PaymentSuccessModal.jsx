import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineX } from "react-icons/hi";
import { PaymentContext } from '../stores/PaymentProvider';
import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/successAnimation.json";

export default function PaymentSuccessModal() {

    // import payment context
    const [cart, setCart, total, setTotal, showPaymentModal, setShowPaymentModal] = useContext(PaymentContext);

    // state
    const [countDownTimer, setCountDownTimer] = useState(10);

    // component did mount
    useEffect(() => {
        setTimeout(() => {
            setShowPaymentModal({
                ...showPaymentModal,
                successModal: false
            })
        }, 10000)
    }, [])

    setInterval(() => {
        setCountDownTimer(countDownTimer - 1);
    }, 1000);

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* payment success modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-10 relative'>

                {/* modal header */}
                <div className='w-full flex flex-col items-center'>
                    <div className='bg-green-200 flex justify-center items-center h-20 w-20 rounded-full m-auto mb-3'>
                        <Lottie animationData={successAnimation} loop={true} />
                    </div>
                    <div>
                        <p className='text-xl text-green-500 font-semibold'>Payment Successful</p>
                    </div>
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowPaymentModal({
                            ...showPaymentModal,
                            successModal: false
                        })
                    }} />
                </div>

                {/* form confirm */}
                <form>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500'>Print Bill</button>

                    <h3 className='text-slate-400 pt-2 text-center'>Automatically close in {countDownTimer}</h3>

                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm'></div>
        </div >
    )
}

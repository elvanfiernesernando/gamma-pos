import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loadingAnimation.json";

export default function LoadingScreen() {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* payment confirmation modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8'>

                <Lottie animationData={loadingAnimation} />

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm'></div>
        </div >
    )
}

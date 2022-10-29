import React, { useContext, useState } from 'react';
import { PaymentContext } from '../stores/PaymentProvider';
import { HiOutlineX } from "react-icons/hi";
import axios from 'axios';
import { currencyFormat } from '../helpers/CurrencyHelper';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loadingAnimation.json"

export default function PaymentModal() {

    // import payment context
    const [cart, setCart, total, setTotal, showPaymentModal, setShowPaymentModal] = useContext(PaymentContext);

    // state
    const [paymentCash, setPaymentCash] = useState(0);

    // handle payment cash
    const handlePaymentCash = (e) => {
        setPaymentCash(e.target.value);
    }

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        setShowPaymentModal({
            ...showPaymentModal,
            confirmModal: false,
            loadingScreen: true
        })

        const order_details = cart.map((e) => {
            return (
                {
                    products_id: e.id,
                    price: e.price,
                    qty: e.qty
                }
            )
        })

        if (!order_details || !total) {
            return alert("Cart is empty!")
        }

        axios.post("http://localhost:5000/api/orders", {
            order_details: order_details,
            total: total
        })
            .then((res) => {
                setCart([]);
                setShowPaymentModal({
                    ...showPaymentModal,
                    loadingScreen: false,
                    confirmModal: false,
                    successModal: true
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // render
    return (

        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* payment confirmation modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3 relative'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Payment Confirmation</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowPaymentModal({
                            ...showPaymentModal,
                            confirmModal: false
                        })
                    }} />
                </div>

                {/* changes display */}
                <div className='flex flex-col'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center'>Changes</h2>
                    <h2 className={`text-center text-2xl font-semibold text-black ${(paymentCash - total) < 0 ? "bg-red-200 border border-red-500" : "bg-green-200 border border-green-500"} flex-1 p-2 my-6 rounded-md`}>{currencyFormat((paymentCash - total) === 0 ? "-" : `Rp. ${(paymentCash - total)}`)}</h2>
                </div>

                {/* form confirm */}
                <form onSubmit={handleSubmit}>

                    {/* total */}
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center w-24'>
                            <h2 className='font-semibold text-slate-700 p-2'>Total</h2>
                            <h2 className='font-semibold text-slate-700 p-2'>:</h2>
                        </div>
                        <h2 className='text-xl font-semibold text-slate-700 flex-1 text-end pr-2'>{`Rp. ${currencyFormat(total)}`}</h2>
                    </div>

                    {/* payment cash */}
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex justify-between items-center w-24'>
                            <h2 className='font-semibold text-slate-700 p-2'>Payment</h2>
                            <h2 className='font-semibold text-slate-700 p-2'>:</h2>
                        </div>

                        {/* input payment cash */}
                        <div>
                            <span className='text-xl font-semibold text-slate-700'>Rp. </span>
                            <input type={"number"} className='w-40 uppercase text-xl font-semibold text-slate-700 text-end border focus:border-[#190983] outline-none px-2' autoFocus onChange={handlePaymentCash} />
                        </div>

                    </div>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500' disabled={(paymentCash - total) < 0} >Confirm Payment</button>
                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowPaymentModal({
                    ...showPaymentModal,
                    confirmModal: false
                })
            }}></div>
        </div >

    )
}

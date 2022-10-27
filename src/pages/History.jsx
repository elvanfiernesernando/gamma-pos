import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HiPlus } from "react-icons/hi";

export default function History() {

    const [ordersHistory, setOrdersHistory] = useState([]);


    // component did mount
    useEffect(() => {
        getAllOrders();
    }, [])

    // get all orders
    const getAllOrders = () => {
        axios.get("http://localhost:5000/api/orders")
            .then((res) => {
                setOrdersHistory(res.data.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // format currency
    const currencyFormat = (number) => {
        return (number || "")
            .toString()
            .replace(/^0|\./g, "")
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    return (
        <div className='w-full h-full overflow-y-auto flex flex-col p-10 gap-8'>

            <h2 className='font-semibold text-2xl text-slate-700'>Transactions History</h2>

            <div className='relative'>

                <div className='h-[200px] w-full bg-[#1D03BD] rounded-md absolute top-0'></div>

                <div className="overflow-x-auto shadow-md relative z-[2] m-8" >

                    {/* <div className='flex justify-between mb-4'>
                        <h3 className='font-semibold text-white text-lg'>Categories</h3>
                        <button className='text-grey-400 font-semibold py-2 px-4 bg-white rounded-md shadow-lg hover:bg-gray-100 flex items-center gap-1'>
                            <HiPlus className='text-lg' />
                            Create New
                        </button>
                    </div> */}

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-[#1D03BD] uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No.
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Invoice Number
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Products
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Created At
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Updated At
                                </th>
                                <th scope="col" className="py-3 px-6 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {ordersHistory.map((e, i) => {
                                return (
                                    <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                            {i + 1}
                                        </th>
                                        <td className="py-4 px-6">
                                            {e.invoice_no}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.order_details.map((e) => {
                                                return e.products.name
                                            }).join(", ")}
                                        </td>
                                        <td className="py-4 px-6">
                                            Rp. {currencyFormat(e.total)},-
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.created_at}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.updated_at}
                                        </td>
                                        <td className="py-4 px-6 flex justify-end gap-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                        </td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                </div>

            </div>




        </div>
    )
}

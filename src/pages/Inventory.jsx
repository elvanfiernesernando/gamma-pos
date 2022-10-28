import React from 'react';
import { HiPlus } from "react-icons/hi";

export default function Inventory() {
    return (
        <div className='w-full h-full overflow-y-auto flex flex-col p-10 gap-8'>

            <h2 className='font-semibold text-2xl text-slate-700'>Inventory</h2>

            <div className='relative'>

                <div className='h-[200px] w-full bg-[#1D03BD] rounded-md absolute top-0'></div>

                <div class="overflow-x-auto shadow-md relative z-[2] m-8" >

                    <div className='flex justify-between mb-4'>
                        <h3 className='font-semibold text-white text-lg'>Categories</h3>
                        <button className='text-grey-400 font-semibold py-2 px-4 bg-white rounded-md shadow-lg hover:bg-gray-100 flex items-center gap-1'>
                            <HiPlus className='text-lg' />
                            Create New
                        </button>
                    </div>

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-[#1D03BD] uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    No.
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Created At
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Updated At
                                </th>
                                <th scope="col" class="py-3 px-6 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td class="py-4 px-6">
                                    Makanan
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td class="py-4 px-6">
                                    Minuman
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    3
                                </th>
                                <td class="py-4 px-6">
                                    Cookies
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='relative'>

                <div className='h-[200px] w-full bg-[#1D03BD] rounded-md absolute top-0'></div>

                <div class="overflow-x-auto shadow-md relative z-[2] m-8" >

                    <div className='flex justify-between mb-4'>
                        <h3 className='font-semibold text-white text-lg'>Products</h3>
                        <button className='text-grey-400 font-semibold py-2 px-4 bg-white rounded-md shadow-lg hover:bg-gray-100 flex items-center gap-1'>
                            <HiPlus className='text-lg' />
                            Create New
                        </button>
                    </div>

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-[#1D03BD] uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    No.
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Created At
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Updated At
                                </th>
                                <th scope="col" class="py-3 px-6 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td class="py-4 px-6">
                                    Pepperoni Pizza
                                </td>
                                <td class="py-4 px-6">
                                    Rp. 51.900,-
                                </td>
                                <td class="py-4 px-6">
                                    Makanan
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td class="py-4 px-6">
                                    Maccaronni Panggang
                                </td>
                                <td class="py-4 px-6">
                                    Rp. 68.900,-
                                </td>
                                <td class="py-4 px-6">
                                    Makanan
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    3
                                </th>
                                <td class="py-4 px-6">
                                    Cornetto Pizza
                                </td>
                                <td class="py-4 px-6">
                                    Rp. 15.700,-
                                </td>
                                <td class="py-4 px-6">
                                    Makanan
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                    4
                                </th>
                                <td class="py-4 px-6">
                                    Coca-Cola
                                </td>
                                <td class="py-4 px-6">
                                    Rp. 5.600,-
                                </td>
                                <td class="py-4 px-6">
                                    Minuman
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6">
                                    2 months ago
                                </td>
                                <td class="py-4 px-6 flex justify-end gap-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>



        </div>
    )
}

import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../stores/InventoryProvider';

import { HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi'
import axios from 'axios';

export default function ProductCreateModal(props) {

    // context
    const [showProductModal, setShowProductModal] = useContext(ProductContext);

    // state
    const [categories, setCategories] = useState([]);

    // react hook form
    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    // create product
    const createProduct = (data) => {

        setShowProductModal({
            ...showProductModal,
            productCreateModal: false,
            loadingScreen: true
        })

        axios.post("http://localhost:5000/api/products", {
            name: data.name,
            price: parseInt(data.price),
            categories_id: parseInt(data.categories_id)
        })
            .then((res) => {
                setShowProductModal({
                    ...showProductModal,
                    productCreateModal: false,
                    loadingScreen: false,
                    productSuccessModal: true
                });
                props.getProducts();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // get all categories
    const getAllCategories = () => {
        axios.get("http://localhost:5000/api/categories")
            .then((res) => {
                setCategories(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // component did mount
    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* product modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3 relative'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Create Product</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowProductModal({
                            ...showProductModal,
                            productCreateModal: false
                        })
                    }} />
                </div>

                {/* form submit */}
                <form onSubmit={handleSubmit(createProduct)}>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="name">Name</label>
                        <div className='flex flex-col gap-1'>
                            <input id='name' type={'text'} className='p-3 outline-none rounded-lg border border-[#1D03BD]' {...register("name", {
                                required: true
                            })} autoFocus />
                            {errors?.name && <small className='text-red-500'>This field is required!</small>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="price">Price</label>
                        <div className='flex flex-col gap-1'>
                            <input id='price' type={'number'} className='p-3 outline-none rounded-lg border border-[#1D03BD]' {...register("price", {
                                required: true
                            })} />
                            {errors?.price && <small className='text-red-500'>This field is required!</small>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="price">Category</label>

                        <div className='flex flex-col gap-1'>

                            <div className="relative">
                                <select id='categories_id' type={'number'} className="appearance-none w-full p-3 outline-none rounded-lg border border-[#1D03BD]" {...register("categories_id", {
                                    required: true
                                })} placeholder='Select category'>
                                    <option value="" disabled selected>Select category</option>
                                    {categories.map((e) => {
                                        return (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        )
                                    })}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                    <HiOutlineChevronDown />
                                </div>
                            </div>

                            {errors?.categories_id && <small className='text-red-500'>Please, select category!</small>}
                        </div>

                    </div>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500 mt-4'>Create New Product</button>
                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowProductModal({
                    ...showProductModal,
                    productCreateModal: false
                })
            }} ></div>
        </div >
    )
}

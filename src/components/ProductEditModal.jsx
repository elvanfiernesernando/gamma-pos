import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../stores/InventoryProvider';

import { HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi'
import axios from 'axios';

export default function ProductEditModal(props) {

    // BASE URL
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    // context
    const [showProductModal, setShowProductModal] = useContext(ProductContext);

    // state
    const [categories, setCategories] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({});

    // component did mount
    useEffect(() => {
        getAllCategories();
        getCurrentProduct();
    }, [])

    // react hook form
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    // get all categories
    const getAllCategories = () => {
        axios.get(BASE_URL + "/api/categories")
            .then((res) => {
                setCategories(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // get current product
    const getCurrentProduct = () => {
        axios.get(BASE_URL + `/api/products/${showProductModal.currentProductId}`)
            .then((res) => {
                setCurrentProduct(res.data.data);
                reset({
                    'name': res.data.data.name,
                    'price': res.data.data.price,
                    'categories_id': res.data.data.categories_id
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // edit product
    const editProduct = (data) => {

        setShowProductModal({
            ...showProductModal,
            productEditModal: false,
            loadingScreen: true
        })

        axios.patch(BASE_URL + `/api/products/${currentProduct.id}`, {
            name: data.name,
            price: data.price,
            categories_id: data.categories_id
        })
            .then((res) => {
                setShowProductModal({
                    ...showProductModal,
                    productEditModal: false,
                    loadingScreen: false,
                    productSuccessModal: true
                });
                props.getProducts();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* product modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3 relative'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Edit Product</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowProductModal({
                            ...showProductModal,
                            productEditModal: false
                        })
                    }} />
                </div>

                {/* form submit */}
                <form onSubmit={handleSubmit(editProduct)}>

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
                                required: true,
                                valueAsNumber: true
                            })} />
                            {errors?.price && <small className='text-red-500'>This field is required!</small>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="price">Category</label>

                        <div className='flex flex-col gap-1'>

                            <div className="relative">
                                <select id='categories_id' type={'number'} className="appearance-none w-full p-3 outline-none rounded-lg border border-[#3a3940]" {...register("categories_id", {
                                    required: true,
                                    valueAsNumber: true
                                })}>
                                    <option value="" disabled>Select category</option>

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

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500 mt-4'>Edit Product</button>
                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowProductModal({
                    ...showProductModal,
                    productEditModal: false
                })
            }} ></div>
        </div >
    )
}

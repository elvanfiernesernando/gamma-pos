import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import { CategoryContext } from '../stores/InventoryProvider';
import axios from 'axios';

export default function CategoryEditModal(props) {

    // BASE URL
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    // hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // context
    const [showCategoryModal, setShowCategoryModal] = useContext(CategoryContext);

    // state
    const [currentCategory, setCurrentCategory] = useState({
        name: ""
    });

    // component did mount
    useEffect(() => {
        getCurrentCategory();
    }, [])

    // get current category
    const getCurrentCategory = () => {
        axios.get(BASE_URL + `/api/categories/${showCategoryModal.currentCategoryId}`)
            .then((res) => {
                setCurrentCategory(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // edit category
    const editCategory = (data) => {

        setShowCategoryModal({
            ...showCategoryModal,
            categoryEditModal: false,
            loadingScreen: true
        })

        axios.patch(BASE_URL + `/api/categories/${showCategoryModal.currentCategoryId}`, {
            name: data.name
        })
            .then((res) => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categoryEditModal: false,
                    loadingScreen: false,
                    categorySuccessModal: true
                })

                props.getCategories();
            })
            .catch((error) => {
                console.error(error)
            })

    }

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* category modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3 relative'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Edit Category</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowCategoryModal({
                            ...showCategoryModal,
                            categoryEditModal: false
                        })
                    }} />
                </div>

                {/* form confirm */}
                <form onSubmit={handleSubmit(editCategory)}>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="name">Name</label>
                        <div className='flex flex-col gap-1'>
                            <input id='name' type="text" className='p-3 outline-none rounded-lg border border-[#1D03BD]' {...register("name", {
                                required: true,
                                onChange: (e) => {
                                    setCurrentCategory({
                                        ...currentCategory,
                                        name: e.target.value
                                    });
                                }
                            })} autoFocus value={currentCategory.name} />
                            {errors?.name && <small className='text-red-500'>This field is required!</small>}
                        </div>
                    </div>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none mt-4'>Edit Category</button>
                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categoryEditModal: false
                })
            }}></div>
        </div >
    )
}

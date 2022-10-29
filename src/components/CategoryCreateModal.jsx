import React, { useContext } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import { CategoryContext } from '../stores/InventoryProvider';
import axios from 'axios';

export default function CategoryCreateModal(props) {

    // hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // context
    const [showCategoryModal, setShowCategoryModal] = useContext(CategoryContext);

    // create category
    const createCategory = ((data) => {

        setShowCategoryModal({
            ...showCategoryModal,
            categoryCreateModal: false,
            loadingScreen: true
        })

        axios.post("http://localhost:5000/api/categories", {
            name: data.name
        })
            .then(async (res) => {
                await props.getCategories()

                setShowCategoryModal({
                    ...showCategoryModal,
                    loadingScreen: false,
                    categoryCreateModal: false,
                    categorySuccessModal: true
                })


            })
            .catch((error) => {
                console.error(error)
            })
    })

    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 z-[5] flex justify-center items-center'>

            {/* category modal */}
            <div className='w-[400px] bg-white rounded-lg shadow-lg p-8 flex flex-col gap-3 relative'>

                {/* modal header */}
                <div className='w-full'>
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Create Category</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowCategoryModal({
                            ...showCategoryModal,
                            categoryCreateModal: false
                        })
                    }} />
                </div>

                {/* form confirm */}
                <form onSubmit={handleSubmit(createCategory)}>

                    <div className='flex flex-col gap-4 mb-2'>
                        <label htmlFor="name">Name</label>
                        <div className='flex flex-col gap-1'>
                            <input id='name' type="text" className='p-3 outline-none rounded-lg border border-[#1D03BD]' {...register("name", { required: true })} autoFocus />
                            {errors?.name && <small className='text-red-500'>This field is required!</small>}
                        </div>
                    </div>

                    <button type='submit' className='bg-[#1D03BD] hover:bg-[#190983] p-3 text-white flex-1 rounded-lg w-full outline-none disabled:bg-slate-500 mt-4'>Create New Category</button>
                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categoryCreateModal: false
                })
            }}></div>
        </div >
    )
}

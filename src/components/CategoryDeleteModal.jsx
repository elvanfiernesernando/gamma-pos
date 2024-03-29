import React, { useContext } from 'react';
import { CategoryContext } from '../stores/InventoryProvider';
import { HiOutlineX } from "react-icons/hi";
import axios from 'axios';

export default function CategoryDeleteModal(props) {

    // BASE URL
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    // context
    const [showCategoryModal, setShowCategoryModal] = useContext(CategoryContext);

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        setShowCategoryModal({
            ...showCategoryModal,
            categoryDeleteModal: false,
            loadingScreen: true,
        })

        axios.delete(BASE_URL + `/api/categories/${showCategoryModal.currentCategoryId}`)
            .then((res) => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categoryDeleteModal: false,
                    loadingScreen: false,
                });

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
                    <h2 className='uppercase font-semibold text-gray-900 text-center mb-5'>Delete Category</h2>
                    <hr />
                    <HiOutlineX className='absolute top-3 right-3 text-xl cursor-pointer' onClick={() => {
                        setShowCategoryModal({
                            ...showCategoryModal,
                            categoryDeleteModal: false
                        })
                    }} />
                </div>

                {/* form confirm */}
                <form onSubmit={handleSubmit}>

                    <h3>Are you sure want to delete this category?</h3>

                    <div className='w-full flex gap-4'>
                        <button type='submit' className='bg-red-500 hover:bg-red-700 p-3 text-white flex-1 rounded-lg w-full outline-none mt-4' onClick={() => {
                            setShowCategoryModal({
                                ...showCategoryModal,
                                categoryDeleteModal: false
                            })
                        }}>Not Now</button>

                        <button type='submit' className='bg-white hover:shadow-lg p-3 text-gray-900 flex-1 rounded-lg w-full outline-none border border-red-500 mt-4'>Delete Anyway</button>
                    </div>

                </form>

            </div>

            {/* background modal */}
            <div className='w-screen h-screen absolute z-[-1] backdrop-brightness-50 backdrop-blur-sm' onClick={() => {
                setShowCategoryModal({
                    ...showCategoryModal,
                    categoryDeleteModal: false
                })
            }}></div>
        </div >
    )
}

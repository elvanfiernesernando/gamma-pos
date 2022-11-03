// mandatory
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// helpers
import { currencyFormat } from '../helpers/CurrencyHelper';
import { HiPlus } from "react-icons/hi";

// context
import { CategoryContext, ProductContext } from '../stores/InventoryProvider';

// modal
import CategoryCreateModal from '../components/CategoryCreateModal';
import CategoryEditModal from '../components/CategoryEditModal';
import CategoryDeleteModal from '../components/CategoryDeleteModal';
import CategorySuccessModal from '../components/CategorySuccessModal';

import ProductCreateModal from '../components/ProductCreateModal';
import ProductEditModal from '../components/ProductEditModal';
import ProductSuccessModal from '../components/ProductSuccessModal';

import LoadingScreen from "../components/LoadingScreen";
import ProductDeleteModal from '../components/ProductDeleteModal';

export default function Inventory() {

    // BASE URL
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    // state
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // context
    const [showCategoryModal, setShowCategoryModal] = useContext(CategoryContext);
    const [showProductModal, setShowProductModal] = useContext(ProductContext);

    // component did mount
    useEffect(() => {
        getAllCategories();
        getAllProducts();
    }, [])

    // get all categories
    const getAllCategories = () => {
        axios.get(BASE_URL + "/api/categories")
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // get all products
    const getAllProducts = () => {
        axios.get(BASE_URL + "/api/products")
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((error) => {
                console.info(error)
            })
    }

    // render
    return (
        <>
            <div className='w-full h-full overflow-y-auto flex flex-col p-10 gap-8'>

                <h2 className='font-semibold text-2xl text-slate-700'>Inventory</h2>

                {/* categories */}
                <div className='relative'>

                    {/* blue background */}
                    <div className='h-[200px] w-full bg-[#1D03BD] rounded-md absolute top-0'></div>

                    {/* content */}
                    <div className="overflow-x-auto shadow-md relative z-[2] m-8" >

                        {/* header */}
                        <div className='flex justify-between mb-4'>
                            <h3 className='font-semibold text-white text-lg'>Categories</h3>
                            <button className='text-grey-400 font-semibold py-2 px-4 bg-white rounded-md shadow-lg hover:bg-gray-100 flex items-center gap-1' onClick={() => {
                                setShowCategoryModal({
                                    ...showCategoryModal,
                                    categoryCreateModal: true
                                })
                            }}>
                                <HiPlus className='text-lg' />
                                Create New
                            </button>
                        </div>

                        {/* table */}
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                            <thead className="text-[#1D03BD] uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        No.
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Name
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

                                {categories.map((e, i) => {
                                    return (
                                        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                {i + 1}
                                            </th>
                                            <td className="py-4 px-6">
                                                {e.name}
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.created_at}
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.updated_at}
                                            </td>
                                            <td className="py-4 px-6 flex justify-end gap-4">
                                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {
                                                    setShowCategoryModal({
                                                        ...showCategoryModal,
                                                        currentCategoryId: e.id,
                                                        categoryEditModal: true
                                                    })
                                                }}>Edit</button>
                                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                                    setShowCategoryModal({
                                                        ...showCategoryModal,
                                                        currentCategoryId: e.id,
                                                        categoryDeleteModal: true
                                                    })
                                                }}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

                {/* products */}
                <div className='relative'>

                    {/* blue background */}
                    <div className='h-[200px] w-full bg-[#1D03BD] rounded-md absolute top-0'></div>

                    {/* content */}
                    <div className="overflow-x-auto shadow-md relative z-[2] m-8" >

                        {/* header */}
                        <div className='flex justify-between mb-4'>
                            <h3 className='font-semibold text-white text-lg'>Products</h3>
                            <button className='text-grey-400 font-semibold py-2 px-4 bg-white rounded-md shadow-lg hover:bg-gray-100 flex items-center gap-1' onClick={() => {
                                setShowProductModal({
                                    ...showProductModal,
                                    productCreateModal: true
                                })
                            }}>
                                <HiPlus className='text-lg' />
                                Create New
                            </button>
                        </div>

                        {/* table */}
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                            <thead className="text-[#1D03BD] uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        No.
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Category
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

                                {products.map((e, i) => {
                                    return (
                                        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                {i + 1}
                                            </th>
                                            <td className="py-4 px-6">
                                                {e.name}
                                            </td>
                                            <td className="py-4 px-6">
                                                Rp. {currencyFormat(e.price)},-
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.categories.name}
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.created_at}
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.updated_at}
                                            </td>
                                            <td className="py-4 px-6 flex justify-end gap-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {
                                                    setShowProductModal({
                                                        ...showProductModal,
                                                        currentProductId: e.id,
                                                        productEditModal: true
                                                    })
                                                }}>Edit</a>
                                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                                    setShowProductModal({
                                                        currentProductId: e.id,
                                                        productDeleteModal: true
                                                    })
                                                }}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

            {/* category modal */}
            {showCategoryModal.categoryCreateModal && <CategoryCreateModal getCategories={getAllCategories} />}
            {showCategoryModal.categoryEditModal && <CategoryEditModal getCategories={getAllCategories} />}
            {showCategoryModal.categoryDeleteModal && <CategoryDeleteModal getCategories={getAllCategories} />}
            {showCategoryModal.categorySuccessModal && <CategorySuccessModal />}
            {showCategoryModal.loadingScreen && <LoadingScreen />}


            {/* product modal */}
            {showProductModal.productCreateModal && <ProductCreateModal getProducts={getAllProducts} />}
            {showProductModal.productEditModal && <ProductEditModal getProducts={getAllProducts} />}
            {showProductModal.productDeleteModal && <ProductDeleteModal getProducts={getAllProducts} />}
            {showProductModal.productSuccessModal && <ProductSuccessModal />}
            {showProductModal.loadingScreen && <LoadingScreen />}

        </>
    )
}

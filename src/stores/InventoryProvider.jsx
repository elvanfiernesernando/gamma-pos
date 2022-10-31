import React, { createContext, useState } from 'react';

// create category context
export const CategoryContext = createContext();

// create product context
export const ProductContext = createContext();

export default function InventoryProvider(props) {

    // category state
    const [showCategoryModal, setShowCategoryModal] = useState({
        currentCategoryId: 1,
        categoryCreateModal: false,
        categoryEditModal: false,
        categoryDeleteModal: false,
        categorySuccessModal: false,
        loadingScreen: false
    });

    // product state
    const [showProductModal, setShowProductModal] = useState({
        currentProductId: 1,
        productCreateModal: false,
        productEditModal: false,
        productDeleteModal: false,
        productSuccessModal: false,
        loadingScreen: false
    })

    return (
        <CategoryContext.Provider value={[showCategoryModal, setShowCategoryModal]}>
            <ProductContext.Provider value={[showProductModal, setShowProductModal]} >
                {props.children}
            </ProductContext.Provider>
        </CategoryContext.Provider>
    )
}

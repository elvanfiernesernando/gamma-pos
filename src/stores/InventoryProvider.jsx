import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export default function InventoryProvider(props) {

    // state
    const [showCategoryModal, setShowCategoryModal] = useState({
        currentCategoryId: 1,
        categoryCreateModal: false,
        categoryEditModal: false,
        categoryDeleteModal: false,
        categorySuccessModal: false,
        loadingScreen: false
    });

    return (
        <CategoryContext.Provider value={[showCategoryModal, setShowCategoryModal]}>
            {props.children}
        </CategoryContext.Provider>
    )
}

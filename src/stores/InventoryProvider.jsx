import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export default function InventoryProvider(props) {

    // state
    const [showInventoryModal, setShowInventoryModal] = useState({
        categoryModal: false,
        categorySuccessModal: false,
        loadingScreen: false
    });

    return (
        <InventoryContext.Provider value={[showInventoryModal, setShowInventoryModal]}>
            {props.children}
        </InventoryContext.Provider>
    )
}

import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export default function PaymentProvider(props) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []);
    const [total, setTotal] = useState(0);
    const [showPaymentModal, setShowPaymentModal] = useState({
        confirmModal: false,
        successModal: false,
        loadingScreen: false
    });

    return (
        <PaymentContext.Provider value={[cart, setCart, total, setTotal, showPaymentModal, setShowPaymentModal]}>
            {props.children}
        </PaymentContext.Provider>
    )
}

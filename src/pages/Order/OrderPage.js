import React from 'react'
import { useTitle } from '../../hooks/useTitle';
import { useLocation } from 'react-router-dom';
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFail } from './components/OrderFail';

export const OrderPage = () => {
    useTitle("Order Summary");
    const { state } = useLocation();

    return (
        <main>
            {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
        </main>
    )
}
import React from 'react'
import { useCart } from '../../context';
import { useTitle } from '../../hooks/useTitle';
import { CartList } from './components/CartList';
import { CartEmpty } from './components/CartEmpty';

export const CartPage = () => {
    const { cartList } = useCart();
    useTitle(`Cart (${cartList.length})`);

    return (
        <main>
            {cartList.length ? <CartList /> : <CartEmpty />}
        </main>
    )
}
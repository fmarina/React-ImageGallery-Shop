import React, {useContext} from 'react';
import {Context} from '../Context';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {cartItems} = useContext(Context);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ));

    return (
        <main className="cart-page">
            <h1>Check Out</h1>
            <div className="container-cart">
                {cartItemElements}
                <p className="total-cost">Total: </p>
                <div className="order-button">
                    <button>Place Order</button>
                </div>
            </div>
        </main>
    );
}

export default Cart;